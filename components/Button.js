import { View, Text, TouchableOpacity,Image } from 'react-native';
import { COLORS, FONTS, SHADOWS, SIZES } from '../constants';

export const CircleButton=({imgUrl,handlePress,...props}) =>{
  return(
    <TouchableOpacity style={{
      width:40,
      height:40,
      backgroundColor:COLORS.white,
      position:'absolute',
      borderRadius:SIZES.extraLarge,
      alignItems:'center',
      justifyContent:'center',
      zIndex:1,
      ...SHADOWS.light,
      ...props
    }}
    onPress={handlePress}>
<Image
source={imgUrl}
resizeMode='contain'
style={{width:24,height: 24,}}
/>
    </TouchableOpacity>
  )
}
export const RectButton = ({
  minWidth,
  fontSize,
  handlePress,
  title,
  fontColor,
  bgColor,
  fontFamily,
  ...props
}) => {
  return (
    <TouchableOpacity
      style={{
        textAlign: 'center',
        display: 'inline-block',
        
        border: 0,
        textDecoration: 'none',
        borderRadius: SIZES.font,
        backgroundColor: bgColor,
        border: '1px solid rgba(255,255,255,0.2)',
        backdropFilter: 'blur(30px)',
        letterSpacing: 2,
        minWidth: minWidth,
        zIndex: 2,
        ...props,
      }}
      onPress={handlePress}
    >
      <View>
        <Text
          style={{
            fontSize: fontSize,
            fontFamily: fontFamily,
            color:fontColor,
          }}
        >
          {title}
        </Text>
      </View>
    </TouchableOpacity>
  );
};
