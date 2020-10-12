import React from 'react'
import { Image, Text, TouchableOpacity, View} from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome5'
import styles from './styles'
import logo from '../../assets/images/logo.png'
import colors from "../../styles/colors";

export default function Home(props) {
  return (
    <View style={styles.container}>
      <View style={styles.topView}>
        <Image source={logo} resizeMode="contain" style={styles.logo}/>
      </View>

      <View style={styles.bottomView}>
        <TouchableOpacity style={[styles.button, {backgroundColor: colors.business.primaryLight}]}
          onPress={() => props.navigation.navigate('BusinessSignUp')}>
          <View style={[styles.buttonIcon, {backgroundColor: colors.business.primary}]}>
            <Icon name="search-dollar" size={20} color="#fff"/>
          </View>
          <Text style={styles.buttonText}>Buscar um serviço</Text>
        </TouchableOpacity>

        <TouchableOpacity style={[styles.button, {backgroundColor: colors.professional.primaryLight}]}
          onPress={() => props.navigation.navigate('ProfessionalSignUp')}>
          <View style={[styles.buttonIcon, {backgroundColor: colors.professional.primary}]}>
            <Icon name="hands-helping" size={20} color="#fff"/>
          </View>
          <Text style={styles.buttonText}>Prestar um serviço</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => props.navigation.navigate('Login')}>
          <Text style={styles.linkText}>Já sou um parceirista</Text>
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
