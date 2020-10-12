import React from 'react'
import {Provider} from 'react-redux';
import {AppLoading} from 'expo'
import {useFonts, Raleway_400Regular, Raleway_700Bold} from '@expo-google-fonts/raleway'
import store from './store'
import HomeNavigation from "./routes/HomeNavigation";

export default function App() {

  const [fontsLoaded] = useFonts({
    Raleway_400Regular,
    Raleway_700Bold
  })

  if (!fontsLoaded) {
    return <AppLoading/>;
  }

  return (
    <Provider store={store}>
      <HomeNavigation />
    </Provider>
  )
}
