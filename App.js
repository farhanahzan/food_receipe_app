import {NavigationContainer, DefaultTheme } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { useFonts } from "expo-font";
import Details from "./screens/Details";
import Home from "./screens/Home";
import HomeProduct from "./screens/HomeProduct";
import HomeReceipe from "./screens/HomeReceipe";
import Login from "./screens/Login";

const Stack = createStackNavigator();

const theme ={
  ...DefaultTheme,
  color:{
    ...DefaultTheme.colors,
    background:"transparent"
  }
}

const App = () => {

  const [loaded] = useFonts({
    InterBold:require("./assets/fonts/Inter-Bold.ttf"),
    InterSemiBold:require("./assets/fonts/Inter-SemiBold.ttf"),
    InterMedium:require("./assets/fonts/Inter-Medium.ttf"),
    InterRegular:require("./assets/fonts/Inter-Regular.ttf"),
    InterLight:require("./assets/fonts/Inter-Light.ttf"),
    InterRounded:require("./assets/fonts/MPLUSRounded1c-Medium.ttf")
  })
  
  if(!loaded) return null;

  return(
    <NavigationContainer theme={theme}>
      <Stack.Navigator screenOptions={{headerShown:false}} initialRouteName="Login">
      <Stack.Screen  options={{headerShowns:false}} name="Login" component={Login}/>
        <Stack.Screen name="Home" component={Home}/>
        <Stack.Screen name="HomeProduct" component={HomeProduct}/>
        <Stack.Screen name="HomeReceipe" component={HomeReceipe}/>
        <Stack.Screen name="Details" component={Details}/>
      </Stack.Navigator>
    </NavigationContainer>
  )

}
export default App;