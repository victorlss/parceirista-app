import React from 'react'
import Icon from 'react-native-vector-icons/FontAwesome5'
import Icon2 from 'react-native-vector-icons/MaterialIcons'
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import Home from '../pages/Business/Home'
import Profile from '../pages/Business/Profile'
import Services from '../pages/Business/Services'
import Services2 from '../pages/Business/Services2'

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
        name="Services2"
        component={Services2}
        options={{
          tabBarLabel: 'Services2',
          tabBarIcon: ({color}) => {
            return <Icon name="home" size={18} color={color}/>
          }
        }}
      />
      <Screen
        name="Entrar"
        component={Profile}
        options={{
          tabBarLabel: 'Entrar',
          tabBarIcon: ({color}) => {
            return <Icon name="user-circle" size={18} color={color}/>
          }
        }}
      />
      <Screen
        name="Perfil"
        component={Services}
        options={{
          tabBarLabel: 'Serviços',
          tabBarIcon: ({color}) => {
            return <Icon2 name="home-repair-service" size={18} color={color} />
          }
        }}
      />
    </Navigator>
  )
}
