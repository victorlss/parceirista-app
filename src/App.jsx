import React from 'react'
import 'react-native-gesture-handler'
import {useFonts, Raleway_400Regular, Raleway_700Bold} from '@expo-google-fonts/raleway'
import {AppLoading} from 'expo'
import HomeNavigation from "./routes/HomeNavigation";

export default function App() {
  const [fontsLoaded] = useFonts({
    Raleway_400Regular,
    Raleway_700Bold
  })

  if (!fontsLoaded) {
    return <AppLoading/>;
  }

  return <HomeNavigation />
}
