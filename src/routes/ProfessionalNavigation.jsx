import React from 'react'
import Icon from 'react-native-vector-icons/FontAwesome5'
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import Home from '../pages/Professional/Home'
import Profile from '../pages/Professional/Profile'
import Rating from '../pages/Professional/Rating'

export default function ProfessionalNavigation() {
  const {Navigator, Screen} = createBottomTabNavigator()
  return (
    <Navigator
      tabBarOptions={{
        activeTintColor: '#fd9644'
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
      <Screen
        name="Avaliações"
        component={Rating}
        options={{
          tabBarLabel: 'Avaliações',
          tabBarIcon: ({color}) => {
            return <Icon name="star" size={18} color={color}/>
          }
        }}
      />
    </Navigator>
  )
}
