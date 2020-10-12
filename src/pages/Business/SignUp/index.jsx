import React from 'react'
import {View, Text, TouchableOpacity, Image, ScrollView, TextInput} from 'react-native'
import LineSeparator from "../../../components/LineSeparator"
import Welcome from "../../../components/Welcome";
import styles from './styles'
import logoSmall from '../../../assets/images/logo-small.png'

export default function SignUp(props) {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.headerView}>
        <Image style={styles.logo} source={logoSmall}/>
        <Text style={styles.headerText}>Crescimento para seu empreendimento</Text>
      </View>
      <Welcome />

      <LineSeparator />

      <View style={styles.formView}>
        <Text style={styles.label}>Dados do empreendimento</Text>
        <TextInput
          placeholder="Nome"
          style={styles.textInput}
          onChangeText={(text) => console.log(text)}
        />
        <TextInput
          placeholder="CPF/CNPJ"
          style={styles.textInput}
          onChangeText={(text) => console.log(text)}
        />
        <TextInput
          placeholder="Telefone"
          style={styles.textInput}
          onChangeText={(text) => console.log(text)}
        />
        <TextInput
          placeholder="Email"
          style={styles.textInput}
          onChangeText={(text) => console.log(text)}
        />
      </View>

      <View style={styles.formView}>
        <Text style={styles.label}>Dados do responsável</Text>
        <TextInput
          placeholder="Nome"
          style={styles.textInput}
          onChangeText={(text) => console.log(text)}
        />
        <TextInput
          placeholder="CPF/CNPJ"
          style={styles.textInput}
          onChangeText={(text) => console.log(text)}
        />
      </View>

      <View style={styles.buttonView}>
        <TouchableOpacity style={styles.button} onPress={() => props.navigation.navigate('BusinessWelcome')}>
          <Text style={styles.buttonText}>SER UM PARCEIRISTA</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  )
}
