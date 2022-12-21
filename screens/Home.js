import { useNavigation } from '@react-navigation/core';
import { View, Text, ImageBackground } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { CircleButton, FocusedStatusBar, RectButton } from '../components';
import { COLORS, assets, SIZES, FONTS } from '../constants';
import { auth } from '../firebase';
import { HomeProduct } from './HomeProduct';
import { HomeReceipe } from './HomeReceipe';
import Login from './Login';

const Home = () => {
  const navigation = useNavigation();
  const signOut = () => {
    auth.signOut()
    .then(()=>{
      navigation.replace("Login")
    })
    .catch(error => alert(error.message))
  }
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <FocusedStatusBar background={COLORS.primary} />
      <ImageBackground
        source={assets.background}
        resizeMode="cover"
        style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}
        blurRadius={6}
      >
          <CircleButton
          right={10}
          top={10}
          handlePress={signOut}
          imgUrl={assets.logout}
          />
        <View>
          <Text
            style={{
              fontSize: SIZES.base * 6,
              fontFamily: FONTS.round,
              lineHeight:50,
              width: 300,
              color: 'rgba(255,255,255,0.8)',
              marginBottom: SIZES.extraLarge*2,
              textShadow: 'rgb(0 0 0 / 50%) 3px 5px 2px',
              textTransform:'uppercase',
              textAlign:'center'
            }}
          >
            Happy Cooking
          </Text>
          <RectButton
            minWidth={130}
            fontSize={SIZES.large}
            title="GROCERY PRODUCTS"
            marginBottom={SIZES.extraLarge}
            handlePress={() => navigation.navigate('HomeProduct')}
            paddingHorizontal= {SIZES.large}
        paddingVertical= {SIZES.font}
        backgroundColor='rgba(255,255,255,0.2)'
        fontColor='rgba(255,255,255,0.8)'
        fontFamily={FONTS.semiBold}
          />
          <RectButton
            minWidth={130}
            fontSize={SIZES.large}
            title="RECIPES"
            handlePress={() => navigation.navigate('HomeReceipe')}
            paddingHorizontal= {SIZES.large}
        paddingVertical= {SIZES.font}
        fontColor='rgba(255,255,255,0.8)'
        backgroundColor='rgba(255,255,255,0.2)'
        fontFamily={FONTS.semiBold}

          />
        
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
};

export default Home;
