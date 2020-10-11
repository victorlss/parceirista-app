import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import Home from '../pages/Home'
import CadastroFornecedor from '../pages/CadastroFornecedor'
import TabNavigation from './tabNavigation'

export default function AppRoutes() {
  const { Navigator, Screen } = createStackNavigator()
  return (
    <Navigator screenOptions={{ headerShown: false }}>
      <Screen name="tab-navigation" component={TabNavigation} />
      <Screen name="cadastro-fornecedor" component={CadastroFornecedor} />
      <Screen name="Home" component={Home} />
    </Navigator>
  )
}
