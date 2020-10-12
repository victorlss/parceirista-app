import React from 'react'
import {Image, Text, TextInput, TouchableOpacity, View} from 'react-native'
import styles from './styles'
import logo from '../../assets/images/logo.png'

export default function Login(props) {
  return (
    <View style={styles.container}>
      <View style={styles.topView}>
        <Image source={logo} resizeMode="contain" style={styles.logo}/>
      </View>

      <View style={styles.formView}>
        <TextInput
          placeholder="Email"
          style={styles.textInput}
          onChangeText={(text) => console.log(text)}
        />
        <TextInput
          placeholder="Senha"
          style={styles.textInput}
          onChangeText={(text) => console.log(text)}
        />
      </View>

      <View style={styles.buttonView}>
        <TouchableOpacity style={styles.button} onPress={() => props.navigation.navigate('ProfessionalNavigation')}>
          <Text style={styles.buttonText}>ENTRAR</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => props.navigation.navigate('Login')}>
          <Text style={styles.text} onPress={() => props.navigation.navigate('ProfessionalSignUp')}>
            Quero ser um parceiro!{' '}
            <Text style={styles.linkText}>Cadastrar</Text>
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}
