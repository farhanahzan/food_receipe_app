import {
  View,
  Text,
  FlatList,
  SafeAreaView,
  ActivityIndicator,
  Image
} from 'react-native';
import React, { useEffect, useState } from 'react';
import {
  HomeHeader,
  FocusedStatusBar,
  ReceipeCard,
  Pagination,
} from '../components';
import { SIZES, COLORS, FONTS, assets ,SHADOWS} from '../constants';

const HomeReceipe = () => {
  const [pagination, setPagination] = useState(0);
  const [value, setValue] = useState('');

  const increment = 5;
  const apiKey = '238790fcf897492ab731becdd96820b9';
  const url = `https://api.edamam.com/search?q=${
    value || 'chicken'
  }&app_id=c995daf0&app_key=55911fdcf42098a816b90128c1b532ac&from=${pagination}&to=${
    pagination + increment
  }`;
  const url1 = `https://api.spoonacular.com/recipes/random?number=10&apiKey=${apiKey}`;

  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  const [searchdata, setSearchdata] = useState([]);

  useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then((json) => {
        setData(json.hits);
        setSearchdata(json.hits);
      })
      .catch((error) => console.error(error))
      .finally(() => setLoading(false));
  }, [value, pagination]);

  const handleSearch = (value) => {
    setValue(value);
    if (!value.length) return setData(data);
    const filteredData = data.filter((item) =>
      item.recipe.label.toLowerCase().includes(value.toLowerCase())
    );

    if (filteredData.length) {
      setSearchdata(filteredData);
    } else {
      setSearchdata(searchdata);
    }
  };

  const bgColor = [
    '#fbe397',
    '#bde7fe',
    '#ffa8a8',
    '#d2afdf',
    '#f4dff8',
    '#f79efe',
    '#ffb1e1',
    '#ffbac9',
    '#d2afdf',
    '#adfed6',
  ];

  const EmptyList = () => {
    return (
      <View
        style={{
          backgroundColor: COLORS.white,
          borderRadius: SIZES.extraLarge,
          margin:SIZES.extraLarge,
          paddingHorizontal: SIZES.base,
          paddingVertical: SIZES.font,
          flexDirection: 'row',
          justifyContent: 'space-around',
          alignItems:'center',
          ...SHADOWS.dark
        }}
        
      >
        <Image
          source={assets.alert}
          resizeMode="contain"
          style={{
            width: 32,
            height: 32,
          }}
        />
        <Text
          style={{
            fontSize: SIZES.extraLarge,
            fontFamily: FONTS.bold,
            color: 'red',
            textTransform:'uppercase'
          }}
        >
          List is empty!
        </Text>
      </View>
    );
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.white }}>
      <FocusedStatusBar background={COLORS.primary} />
      <View
        style={{ flex: 1, justifyContent: 'flex-start', alignItems: 'streach' }}
      >
        <HomeHeader onSearch={handleSearch} type="receipe" value={value} />
        {isLoading ? (
          <ActivityIndicator size="large" color="#fbe397" />
        ) : (
          <View
            style={{
              backgroundColor: COLORS.white,
              padding: SIZES.font,
              borderTopLeftRadius: SIZES.font,
              borderTopRightRadius: SIZES.font,
            }}
          >
            <FlatList
              data={searchdata}
              renderItem={({ item, index }) => (
                <ReceipeCard
                  data={item.recipe}
                  bgColor={bgColor[index % bgColor.length]}
                />
              )}
              keyExtractor={(item) => item.recipe.label}
              showsVerticalScrollIndicator={false}
              ListHeaderComponent={
                <Text
                  style={{
                    fontFamily: FONTS.round,
                    fontSize: SIZES.large,
                    fontWeight: 700,
                  }}
                >
                  {(value) ? (searchdata.length>0?'Search Result':'Network Error') : (searchdata.length>0?'Popular Recipe':'Network Error')}
                </Text>
              }
              numColumns={1}
              ListFooterComponent={
                <Pagination
                  pagination={pagination}
                  setPagination={setPagination}
                  increment={increment}
                />
              }
              ListEmptyComponent={<EmptyList/>}
            />
          </View>
        )}

        <View
          style={{
            position: 'absolute',
            top: 0,
            bottom: 0,
            left: 0,
            right: 0,
            zIndex: -1,
          }}
        >
          <View style={{ height: 300, backgroundColor: COLORS.primary }} />
          <View style={{ flex: 1, backgroundColor: COLORS.white }} />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default HomeReceipe;
