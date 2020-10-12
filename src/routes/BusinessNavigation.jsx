import React from 'react'
import { connect } from 'react-redux';
import Icon from 'react-native-vector-icons/FontAwesome5'
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import Home from '../pages/Business/Home'
import Profile from '../pages/Business/Profile'
import Services from '../pages/Business/Services'
<<<<<<< HEAD
import Login from "../pages/Login";
import colors from "../styles/colors";
=======
import AddCard from '../pages/Business/AddCard'
>>>>>>> feat/payments-page

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
<<<<<<< HEAD

      {props.user.isLoggedIn ? (
        <Screen
          name="Perfil"
          component={Profile}
          options={{
            tabBarLabel: 'Perfil',
            tabBarIcon: ({color}) => <Icon name="user-circle" size={18} color={color}/>
          }}
        />
      ) : (
        <Screen
          name="Entrar"
          component={Login}
          options={{
            tabBarLabel: 'Entrar',
            tabBarIcon: ({color}) => <Icon name="user-circle" size={18} color={color}/>
          }}
        />
      )}

=======
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
>>>>>>> feat/payments-page
      <Screen
        name="Services"
        component={Services}
        options={{
          tabBarLabel: 'Serviços',
          tabBarIcon: ({color}) => {
<<<<<<< HEAD
            return <Icon name="toolbox" size={18} color={color} />
=======
            return <Icon name="shopping-bag" size={18} color={color} />
>>>>>>> feat/payments-page
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
