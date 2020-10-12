import React from 'react'
import 'react-native-gesture-handler'
import {NavigationContainer} from '@react-navigation/native'
import createStackNavigator from '@react-navigation/stack/src/navigators/createStackNavigator';
import Home from '../pages/Home';
import Login from '../pages/Login';
import ProfessionalSignUp from '../pages/Professional/SignUp'
import ProfessionalWelcome from '../pages/Professional/Welcome'
import ProfessionalNavigation from './ProfessionalNavigation'
import BusinessSignUp from "../pages/Business/SignUp"
import BusinessWelcome from '../pages/Business/Welcome'
import BusinessNavigation from "./BusinessNavigation"

export default function HomeNavigation() {
  const { Navigator, Screen } = createStackNavigator()
  return (
    <NavigationContainer>
      <Navigator initialRouteName="Index">
        <Screen name="Home" component={Home} options={{headerShown: false, headerTitle: 'Inicio'}} />
        <Screen name="Login" component={Login} options={{headerTitle: 'Entrar'}}/>
        <Screen name="BusinessSignUp" component={BusinessSignUp} options={{headerTitle: 'Seja um parceirista'}}/>
        <Screen name="BusinessWelcome" component={BusinessWelcome} options={{headerShown: false}} />
        <Screen name="BusinessNavigation" component={BusinessNavigation} options={{headerShown: false}} />
        <Screen name="ProfessionalWelcome" component={ProfessionalWelcome} options={{headerShown: false}} />
        <Screen name="ProfessionalSignUp" component={ProfessionalSignUp} options={{headerTitle: 'Seja um parceiro'}}/>
        <Screen name="ProfessionalNavigation" component={ProfessionalNavigation} options={{headerShown: false}} />
      </Navigator>
    </NavigationContainer>
  )
}
