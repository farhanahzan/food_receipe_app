import {
  View,
  Share,
  SafeAreaView,
  Image,
  StatusBar,
  Text,
  TouchableOpacity
} from 'react-native';
import React from 'react';
import { CircleButton, FocusedStatusBar } from '../components';
import { SIZES, assets, FONTS, COLORS } from '../constants';
import Home from './Home';
const Details = ({ route, navigation }) => {
  const { data } = route.params;
  const onShare = async () => {
    try {
      const result = await Share.share({
        message: `${data.shareAs}`,
        title: 'Awesome Recipe',
      });
      if (result.action === Share.sharedAction) {
        if (result.activityType) {
          // shared with activity type of result.activityType
        } else {
          // shared
        }
      } else if (result.action === Share.dismissedAction) {
        // dismissed
      }
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#001f2d' }}>
      <FocusedStatusBar
        barStyle="dark-content"
        backgroundColor="transparent"
        transLucent={true}
      />
      <View style={{ width: '100%', height: 373 }}>
        <View
          style={{
            position: 'absolute',
            width: '42%',
            backgroundColor: 'rgba(0,0,0,0.5)',
            height: '55%',
            right: 0,
            zIndex: 1,
            top: '24%',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'flex-start',
            borderTopLeftRadius: SIZES.large,
            borderBottomLeftRadius: SIZES.large,
          }}
        >
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
              margin: SIZES.font,
            }}
          >
            <Image
              source={assets.calories}
              resizeMode="contain"
              style={{
                width: 24,
                height: 24,
                marginRight: SIZES.base,
              }}
            />
          
            <Text
              style={{
                fontFamily: FONTS.regular,
                fontSize: SIZES.font,
                color: COLORS.white,
              }}
            >
              {Math.round(data.calories)} Calories
            </Text>
          </View>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
              margin: SIZES.font,
            }}
          >
            <Image
              source={assets.incredients}
              resizeMode="contain"
              style={{
                width: 24,
                height: 24,
                marginRight: SIZES.base,
              }}
            />
            <Text
              style={{
                fontFamily: FONTS.regular,
                fontSize: SIZES.font,
                color: COLORS.white,
              }}
            >
              {data.ingredients.length} Ingrediens
            </Text>
          </View>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
              margin: SIZES.font,
            }}
          >
            <Image
              source={assets.meal}
              resizeMode="contain"
              style={{
                width: 24,
                height: 24,
                marginRight: SIZES.base,
              }}
            />

            <Text
              style={{
                fontFamily: FONTS.semiBold,
                fontSize: SIZES.font,
                color: COLORS.white,
              }}
            >
              {data.mealType[0]}
            </Text>
          </View>
          {
  data.totalTime>0?
  <View
    style={{
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      margin: SIZES.font,
    }}
  >
    <Image
      source={assets.time}
      resizeMode="contain"
      style={{
        width: 24,
        height: 24,
        marginRight: SIZES.base,
      }}
    />

    <Text
      style={{
        fontFamily: FONTS.semiBold,
        fontSize: SIZES.font,
        color: COLORS.white,
      }}
    >
      {data.totalTime} Minutes
    </Text>
  </View>:null
}
        </View>
        <CircleButton
          imgUrl={assets.left}
          left={15}
          top={StatusBar.currentHeight + 10}
          handlePress={() => navigation.goBack()}
        />
        <CircleButton
          imgUrl={assets.share}
          right={15}
          top={StatusBar.currentHeight + 10}
          handlePress={onShare}
        />
        <Image
          source={data.image}
          resizeMode="cover"
          style={{
            width: '100%',
            height: '100%',
            borderRadius: SIZES.large,
            borderTopLeftRadius: 'none',
            borderTopRightRadius: 'none',
          }}
        />
      </View>
      <View
        style={{ paddingVertical: SIZES.large, paddingHorizontal: SIZES.font }}
      >
        <Text
          style={{
            fontFamily: FONTS.light,
            fontSize: SIZES.extraLarge,
            color: COLORS.white,
            textAlign: 'left',
            marginBottom: SIZES.large,
          }}
        >
          {data.label}
        </Text>
        <View>
          <Text
            style={{
              fontFamily: FONTS.medium,
              fontSize: SIZES.medium,
              color: COLORS.white,
              textAlign: 'left',
              marginBottom: SIZES.base,
            }}
          >
            🍗 Ingredients
          </Text>
          <View>
          {data.ingredientLines.map((item, index) => (
            <Text
              style={{
                fontFamily: FONTS.light,
                fontSize: SIZES.font,
                color: COLORS.white,
                textAlign: 'left',
                paddingLeft: SIZES.extraLarge,
                marginBottom: SIZES.base / 2,
              }}
              key={index}
            >
              {item}
            </Text>
          ))}
          </View>
          
        </View>
        <View>
          <Text
            style={{
              fontFamily: FONTS.medium,
              fontSize: SIZES.medium,
              color: COLORS.white,
              textAlign: 'left',
              marginTop: SIZES.base,
              marginBottom: SIZES.base,
            }}
          >
            ⚖️ Weight {Math.round(data.totalWeight)}g
          </Text>
          <Text
            style={{
              fontFamily: FONTS.medium,
              fontSize: SIZES.medium,
              color: COLORS.white,
              textAlign: 'left',
              marginTop: SIZES.base,
              marginBottom: SIZES.base,
            }}
          >
            🧑🏼‍🤝‍🧑🏼 Servings for {data.yield} Persons
          </Text>
          <Text
            style={{
              fontFamily: FONTS.medium,
              fontSize: SIZES.medium,
              color: COLORS.white,
              textAlign: 'left',
              marginTop: SIZES.base,
              marginBottom: SIZES.base,
            }}
            onPress={() => Linking.openURL(data.uri)}
          >
            📎 Source '{data.source}'
          </Text>
          {!!data.cuisineType.length > 0 ? (
            <Text
              style={{
                fontFamily: FONTS.medium,
                fontSize: SIZES.medium,
                color: COLORS.white,
                textAlign: 'left',
                marginTop: SIZES.base,
                marginBottom: SIZES.base,
              }}
            >
              🧔 Cuisine Type '{data.cuisineType[0]}'
            </Text>
          ) : null}

          {!!data.dietLabels.length > 0 ? (
            <Text
              style={{
                fontFamily: FONTS.medium,
                fontSize: SIZES.medium,
                color: COLORS.white,
                textAlign: 'left',
                marginTop: SIZES.base,
                marginBottom: SIZES.base,
              }}
            >
              🥗 Diet Label '{data.dietLabels[0]}'
            </Text>
          ) : null}

          {!!data.cautions.length > 0 ? (
            <Text
              style={{
                fontFamily: FONTS.medium,
                fontSize: SIZES.medium,
                color: COLORS.white,
                textAlign: 'left',
                marginTop: SIZES.base,
                marginBottom: SIZES.base,
              }}
            >
              ☠️ Cautions '{data.cautions[0]}'
            </Text>
          ) :null}
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Details;
