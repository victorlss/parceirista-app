import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import Home from '../pages/home'

export default function AppRoutes() {
  const { Navigator, Screen } = createStackNavigator()
  return (
    <Navigator screenOptions={{ headerShown: false }}>
      <Screen name="Home" component={Home} />
    </Navigator>
  )
}
