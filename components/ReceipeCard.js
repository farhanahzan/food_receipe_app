import { View, Text, Image } from 'react-native';
import React from 'react';
import { COLORS, FONTS, SHADOWS, SIZES } from '../constants';
import { RectButton } from './Button';
import { useNavigation } from '@react-navigation/native';

const ReceipeCard = ({ data, bgColor }) => {
  const navigation = useNavigation();
  const title = data.label;
  console.log(data);
  return (
    <View
      style={{
        padding: 2,
        paddingLeft: SIZES.base,
        margin: SIZES.base,
        width: '95%',
        flexDirection: 'row',
        height: '200',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: bgColor,
        borderRadius: SIZES.font,
        borderBottomRightRadius: 50,
        borderTopRightRadius: 50,
        ...SHADOWS.dark,
      }}
    >
      <View
        style={{
          flexDirection: 'column',
          alignItems: 'flex-start',
          justifyContent: 'center',
          gap:SIZES.font,
          width:'70%'
        }}
      >
        <Text
          style={{
            paddingRight: SIZES.base,
            fontFamily: FONTS.semiBold,
            fontSize: SIZES.medium,
          }}
        >
          {title.length>47 ? title.slice(0,47)+'...' : title}
        </Text>
        <RectButton
          title="More"
          fontSize={SIZES.font}
          paddingHorizontal={SIZES.font}
          paddingVertical={SIZES.base}
          fontColor={COLORS.white}
          backgroundColor={COLORS.primary}
          fontFamily={FONTS.regular}
          borderRadius={25}
          {...SHADOWS.light}
          handlePress={()=>navigation.navigate("Details",{data})}
        />
      </View>

      <Image
        source={data.image}
        resizeMode="cover"
        style={{
          width: 100,
          height: 100,
          borderRadius: '50%',
        }}
      />
    </View>
  );
};

export default ReceipeCard;
