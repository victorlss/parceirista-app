import React from 'react'
import createStackNavigator from "@react-navigation/stack/src/navigators/createStackNavigator"
import {NavigationContainer} from "@react-navigation/native"
import Home from '../pages/Business/Home'
import ServiceDetail from '../pages/Business/ServiceDetail'

export default function BusinessHomeNavigation() {
  const {Navigator, Screen} = createStackNavigator()
  return (
    <NavigationContainer independent={true}>
      <Navigator initialRouteName="Index">
        <Screen name="Home" component={Home} options={{headerShown: false, headerTitle: 'Inicio'}}/>
        <Screen name="ServiceDetail" component={ServiceDetail} options={{headerTitle: 'Detalhes do serviço'}}/>
      </Navigator>
    </NavigationContainer>
  )
}
