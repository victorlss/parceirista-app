import React from 'react'
import {View, Image, Text, TouchableOpacity} from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome5'
import styles from './styles'
import logo from '../../assets/images/logo.png'

export default function Home(props) {
  return (
    <View style={styles.container}>
      <View style={styles.topView}>
        <Image source={logo} resizeMode="contain" style={styles.logo}/>
      </View>

      <View style={styles.bottomView}>
        <TouchableOpacity style={[styles.button, {backgroundColor: '#C69CEF'}]}
                          onPress={() => props.navigation.navigate('BusinessSignUp')}>
          <View style={[styles.buttonIcon, {backgroundColor: '#A55EEA'}]}>
            <Icon name="search-dollar" size={20} color="#fff"/>
          </View>
          <Text style={styles.buttonText}>Buscar um parceiro</Text>
        </TouchableOpacity>

        <TouchableOpacity style={[styles.button, {backgroundColor: '#ffb67b'}]}
                          onPress={() => props.navigation.navigate('ProfessionalSignUp')}>
          <View style={[styles.buttonIcon, {backgroundColor: '#FD9644'}]}>
            <Icon name="hands-helping" size={20} color="#fff"/>
          </View>
          <Text style={styles.buttonText}>Seja um parceiro</Text>
        </TouchableOpacity>

        <Text style={styles.footerText}>
          Total de 652{' '}
          <Icon name="hands-helping" size={13} color="#a55eea"/>{' '}
          parceiristas
        </Text>
      </View>
    </View>
  )
}
