import React from 'react'
import { connect } from 'react-redux';
import Icon from 'react-native-vector-icons/FontAwesome5'
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import Home from '../pages/Business/Home'
import Profile from '../pages/Business/Profile'
import Services from '../pages/Business/Services'
import AddCard from '../pages/Business/AddCard'
import colors from '../styles/colors';

function ProfessionalNavigation(props) {
  const {Navigator, Screen} = createBottomTabNavigator()
  return (
    <Navigator
      tabBarOptions={{
        activeTintColor: colors.business.primary
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
        name="Payments"
        component={AddCard}
        options={{
          tabBarLabel: 'Pagamento',
          tabBarIcon: ({color}) => {
            return <Icon name="credit-card" size={18} color={color} />
          }
        }}
      />
      <Screen
        name="Services"
        component={Services}
        options={{
          tabBarLabel: 'Serviços',
          tabBarIcon: ({color}) => {
            return <Icon name="shopping-bag" size={18} color={color} />
          }
        }}
      />
    </Navigator>
  )
}

const mapStateToProps = function(state) {
  return {
    user: state.user
  }
}

export default connect(mapStateToProps)(ProfessionalNavigation);
