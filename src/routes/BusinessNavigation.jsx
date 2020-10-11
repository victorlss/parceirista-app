import React from 'react'
import Icon from 'react-native-vector-icons/FontAwesome5'
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import Home from '../pages/Business/Home'
import Profile from '../pages/Business/Profile'

export default function ProfessionalNavigation() {
  const {Navigator, Screen} = createBottomTabNavigator()
  return (
    <Navigator
      tabBarOptions={{
        activeTintColor: '#A55EEA'
      }}
    >
      <Screen
        name="Home"
        component={Home}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({color}) => {
            return <Icon name="home" size={18} color={color}/>
          }
        }}
      />
      <Screen
        name="Perfil"
        component={Profile}
        options={{
          tabBarLabel: 'Perfil',
          tabBarIcon: ({color}) => {
            return <Icon name="user-circle" size={18} color={color}/>
          }
        }}
      />
    </Navigator>
  )
}
