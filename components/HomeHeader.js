import { useNavigation } from '@react-navigation/core';
import { View, Text, Image, TextInput, TouchableOpacity} from 'react-native'
import {FONTS, COLORS, SIZES , assets} from '../constants'
import { auth } from '../firebase';
import Home from '../screens/Home';
import Login from '../screens/Login';
import { CircleButton } from './Button';

const HomeHeader = ({onSearch, value, route}) => {
  const email =auth.currentUser?.email;
  const navigation = useNavigation();
  const signOut = () => {
    auth.signOut()
    .then(()=>{
      navigation.replace("Login")
    })
    .catch(error => alert(error.message))
  }
  return (
    <View style={{
      backgroundColor:COLORS.primary,
      padding:SIZES.font
    }}>
      <View style={{
        flexDirection:"row",
        justifyContent:"space-between",
        alignItems:"center"
      }}>
        <TouchableOpacity
        onPress={()=>navigation.replace('Home')}
        >
        <Image
        source={assets.logo}
        resizeMode="contain"
        style={{
          width:90,height:25
        }}
        
        />
        </TouchableOpacity>
        
         <CircleButton
          right={0}
          handlePress={signOut}
          imgUrl={assets.logout}
          />
      </View>
      <View style={{marginVertical:SIZES.font}}>
        <Text style={{fontFamily:FONTS.regular, fontSize:SIZES.font,color:COLORS.white}}>
          Hello, {(email).substring(0, email.lastIndexOf("@"))}👋
        </Text>
        <Text style={{fontFamily:FONTS.bold, fontSize:SIZES.large,color:COLORS.white, marginTop:SIZES.base/2}}>
          Let's find a Recipe👩‍🍳
        </Text>
      </View>

      <View style={{marginTop:SIZES.font}}>
        <View style={{
          width:'100%',
          borderRadius:SIZES.font,
          backgroundColor:COLORS.gray,
          flexDirection:'row',
          alignItems:'center',
          paddingHorizontal:SIZES.font,
          paddingVertical:SIZES.small-2
        }}>
          <Image
          source={assets.search}
          resizeMode='contain'
          style={{width:20, height: 20,marginRight:SIZES.base}}
          />
          <TextInput
          placeholder='Search Recipe'
          style={{flex:1}}
          onChangeText={onSearch}
          value={value}
          />
        </View>
      </View>
    </View>
  )
}

export default HomeHeader