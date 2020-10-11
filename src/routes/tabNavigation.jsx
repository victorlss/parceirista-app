import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import TabHomeNavigation from '../pages/TabHomeNavigation'
import TabPerfilNavigation from '../pages/TabPerfilNavigation'
import TabAvaliationNavigation from '../pages/TabAvaliationNavigation'
export default function TabNavigation() {
  const { Navigator, Screen } = createBottomTabNavigator()
  return (
    <Navigator>
      <Screen name='Home' component={TabHomeNavigation}/>
      <Screen name='Perfil' component={TabPerfilNavigation}/>
      <Screen name='Avaliações' component={TabAvaliationNavigation}/>
    </Navigator>
  )
}
