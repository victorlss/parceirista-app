import React from 'react'
import 'react-native-gesture-handler'
import {NavigationContainer} from '@react-navigation/native'
import createStackNavigator from "@react-navigation/stack/src/navigators/createStackNavigator";
import {useFonts, Raleway_400Regular, Raleway_700Bold} from '@expo-google-fonts/raleway'
import {AppLoading} from 'expo'
import Home from "./pages/Home";
import ProfessionalSignUp from "./pages/Professional/SignUp";

export default function App() {
  const [fontsLoaded] = useFonts({
    Raleway_400Regular,
    Raleway_700Bold
  })

  if (!fontsLoaded) {
    return <AppLoading/>;
  }

  const Stack = createStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Inicio" component={Home} options={{headerShown: false}} />
        <Stack.Screen name="Seja um parceiro" component={ProfessionalSignUp}/>
      </Stack.Navigator>
    </NavigationContainer>
  )
}
