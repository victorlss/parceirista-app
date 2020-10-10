import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import Home from '../pages/home'
import CadastroFornecedor from '../pages/cadastro-fornecedor'

export default function AppRoutes() {
  const { Navigator, Screen } = createStackNavigator()
  return (
    <Navigator screenOptions={{ headerShown: false }}>
      <Screen name="cadastro-fornecedor" component={CadastroFornecedor} />
      <Screen name="Home" component={Home} />
    </Navigator>
  )
}
