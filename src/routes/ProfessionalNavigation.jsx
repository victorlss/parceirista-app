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
        // style: {
        //   elevation: 20,
        //   shadowOpacity: 0,
        //   height: 50
        // },
        // tabStyle: {
        //   alignItems: 'center',
        //   justifyContent: 'center'
        // },
        // iconStyle: {
        //   flex: 0,
        //   width: 15,
        //   height: 15
        // },
        // labelStyle: {
        //   fontSize: 12,
        //   marginTop: 3
        // },
        // inactiveBackgroundColor: '#e6e6f0',
        // activeBackgroundColor: '#e6e6f0',
        // inactiveTintColor: '#778ca3',
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
