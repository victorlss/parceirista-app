import React from 'react'
import 'react-native-gesture-handler'
import {NavigationContainer} from '@react-navigation/native'
import createStackNavigator from '@react-navigation/stack/src/navigators/createStackNavigator';
import Home from '../pages/Home';
import ProfessionalSignUp from '../pages/Professional/SignUp'
import ProfessionalNavigation from './ProfessionalNavigation'
import BusinessSignUp from "../pages/Business/SignUp"
import BusinessTutorial from '../pages/Business/Tutorial'
import BusinessNavigation from "./BusinessNavigation"

export default function HomeNavigation() {
  const { Navigator, Screen } = createStackNavigator()
  return (
    <NavigationContainer>
      <Navigator initialRouteName="BusinessNavigation">
        <Screen name="Home" component={Home} options={{headerShown: false, headerTitle: 'Inicio'}} />
        <Screen name="BusinessNavigation" component={BusinessNavigation} options={{headerShown: false}} />
        <Screen name="BusinessSignUp" component={BusinessSignUp} options={{headerTitle: 'Seja um parceirista'}}/>
        <Screen name="BusinessTutorial" component={BusinessTutorial} options={{headerShown: false}} />
        <Screen name="ProfessionalSignUp" component={ProfessionalSignUp} options={{headerTitle: 'Seja um parceiro'}}/>
        <Screen name="ProfessionalNavigation" component={ProfessionalNavigation} options={{headerShown: false}} />
      </Navigator>
    </NavigationContainer>
  )
}
