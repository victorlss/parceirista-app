import React from 'react'
import {View, Text, TouchableOpacity, ScrollView, TextInput} from 'react-native'
import LineSeparator from "../../../components/LineSeparator"
import Welcome from "../../../components/Welcome";
import styles from './styles'

export default function SignUp(props) {
  return (
    <ScrollView style={styles.container}>
      <Welcome/>
      <LineSeparator/>
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
