import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import TabHomeNavigation from '../pages/TabHomeNavigation'
import TabPerfilNavigation from '../pages/TabPerfilNavigation'
import TabAvaliationNavigation from '../pages/TabAvaliationNavigation'
import Icon from 'react-native-vector-icons/FontAwesome5'

export default function TabNavigation() {
  const { Navigator, Screen } = createBottomTabNavigator()
  return (
    <Navigator
      tabBarOptions={{
        style: {
          elevation: 20,
          shadowOpacity: 0,
          height: 50
        },
        tabStyle: {
          alignItems: 'center',
          justifyContent: 'center'
        },
        iconStyle: {
          flex: 0,
          width: 15,
          height: 15
        },
        labelStyle: {
          fontSize: 12,
          marginTop: 3
          
        },
        inactiveBackgroundColor: '#e6e6f0',
        activeBackgroundColor: '#e6e6f0',
        inactiveTintColor: '#778ca3',
        activeTintColor: '#fd9644'
      }}
    >
      <Screen
        name="Home"
        component={TabHomeNavigation}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({ color }) => {
            return <Icon name="home" size={18} color={color} />
          }
        }}
      />
      <Screen
        name="Perfil"
        component={TabPerfilNavigation}
        options={{
          tabBarLabel: 'Perfil',
          tabBarIcon: ({ color }) => {
            return <Icon name="user-circle" size={18} color={color} />
          }
        }}
      />
      <Screen
        name="Avaliações"
        component={TabAvaliationNavigation}
        options={{
          tabBarLabel: 'Avaliações',
          tabBarIcon: ({ color }) => {
            return <Icon name="star" size={18} color={color} />
          }
        }}
      />
    </Navigator>
  )
}
