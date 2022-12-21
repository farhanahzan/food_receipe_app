import { View, Text,TouchableOpacity,TextInput ,KeyboardAvoidingView , ImageBackground,Platform} from 'react-native';
import React, { useState, useEffect } from 'react';
import { COLORS, FONTS, SIZES ,assets} from '../constants';
import { auth } from '../firebase';
import { useNavigation } from '@react-navigation/core';
import Home from './Home';
import { RectButton } from '../components';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

const navigation = useNavigation();

useEffect(() => {
    const unSubscribe = auth.onAuthStateChanged(user =>{
        if(user){
            navigation.replace("Home")
        }
    })
  return unSubscribe
}, [])

  const handleSignup = () => {
    auth
      .createUserWithEmailAndPassword(email, password)
      .then((userCredentials) => {
        const user = userCredentials.user;
        console.log(user.email);
      })
      .catch(error => alert(error.message));
  };

  const handleSignin = () => {
    auth
      .signInWithEmailAndPassword(email, password)
      .then((userCredentials) => {
        const user = userCredentials.user;
        console.log(user.email);
      })
      .catch(error => alert(error.message));
  };
  return (
    <ImageBackground
    source={assets.background}
    resizeMode="cover"
    style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}
    blurRadius={6}
  >
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      }}

    >
       
 <View style={{ width:300 }}>
        <TextInput
          placeholder="Email"
          placeholderTextColor={COLORS.white}
          value={email}
          onChangeText={(text) => setEmail(text)}
          style={{
            backgroundColor:'#f3f4f53d',
            paddingVertical: SIZES.font,
            paddingHorizontal: SIZES.medium,
            borderBottom:'3px solid white',
            fontSize:SIZES.large,
            color:COLORS.white,
            marginBottom:SIZES.font
          }}
        />
        <TextInput
          placeholder="Password"
          placeholderTextColor={COLORS.white}
          value={password}
          onChangeText={(text) => setPassword(text)}
          secureTextEntry
          style={{
            backgroundColor:'#f3f4f53d',
            paddingVertical: SIZES.font,
            paddingHorizontal: SIZES.medium,
            borderBottom:'3px solid white',
            fontSize:SIZES.large,
            color:COLORS.white,
            marginBottom:SIZES.font

          }}
        />
      </View>
      <View style={{ width: 300 , flexDirection:'row', justifyContent:'space-between', alignItems:'center'}}>
       
        <RectButton
            minWidth={130}
            fontSize={SIZES.medium}
            title="LOGIN"
            handlePress={handleSignin}
            paddingHorizontal= {SIZES.large}
        paddingVertical= {SIZES.font}
        backgroundColor='rgba(255,255,255,0.2)'
        fontColor='rgba(255,255,255,0.8)'
        fontFamily={FONTS.semiBold}
          />
            <Text style={{
                color: COLORS.white,
                fontSize: SIZES.medium,
                fontFamily: FONTS.semiBold,
                }}>
                OR
            </Text>
        
        <RectButton
            minWidth={130}
            fontSize={SIZES.medium}
            title="REGISTER"
            handlePress={handleSignup}
            paddingHorizontal= {SIZES.large}
        paddingVertical= {SIZES.font}
        backgroundColor='rgba(255,255,255,0.2)'
        fontColor='rgba(255,255,255,0.8)'
        fontFamily={FONTS.semiBold}
          />
      </View>
     
    </KeyboardAvoidingView>
    </ImageBackground>

  );
};

export default Login;
