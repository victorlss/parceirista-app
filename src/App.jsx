import 'react-native-gesture-handler'
import { NavigationContainer } from '@react-navigation/native'
import React from 'react'
import { StatusBar } from 'expo-status-bar'
import Routes from './routes'
import {
  useFonts,
  Raleway_400Regular,
  Raleway_700Bold,
} from '@expo-google-fonts/raleway'
import { AppLoading } from 'expo'

export default function App() {
  let [fontsLoaded] = useFonts({
    Raleway_400Regular,
    Raleway_700Bold
  })
   if (!fontsLoaded) {
    return <AppLoading />;
  } else {
  return (
    <NavigationContainer>
      <Routes />
      <StatusBar style='auto'/>
    </NavigationContainer>
  )
  }
}
