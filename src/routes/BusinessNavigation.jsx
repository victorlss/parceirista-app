import React from 'react'
import {connect} from 'react-redux';
import Icon from 'react-native-vector-icons/FontAwesome5'
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import AddCard from '../pages/Business/AddCard'
import Home from '../pages/Business/Home'
import Profile from '../pages/Business/Profile'
import Services from '../pages/Business/Services'
import colors from '../styles/colors';
import Login from "../pages/Login";

function ProfessionalNavigation(props) {
  const {Navigator, Screen} = createBottomTabNavigator()
  return (
    <Navigator tabBarOptions={{activeTintColor: colors.business.primary}}>
      <Screen
        name="Home"
        component={Home}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({color}) => <Icon name="home" size={18} color={color}/>
        }}
      />

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

      <Screen
        name="Payments"
        component={AddCard}
        options={{
          tabBarLabel: 'Pagamento',
          tabBarIcon: ({color}) => <Icon name="credit-card" size={18} color={color}/>
        }}
      />
      <Screen
        name="Services"
        component={Services}
        options={{
          tabBarLabel: 'Serviços',
          tabBarIcon: ({color}) => <Icon name="toolbox" size={18} color={color}/>
        }}
      />
    </Navigator>
  )
}

const mapStateToProps = function (state) {
  return {
    user: state.user
  }
}

export default connect(mapStateToProps)(ProfessionalNavigation);
