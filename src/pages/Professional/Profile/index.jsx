import React from 'react'
import { View, Text } from 'react-native'
import ProfileInfo from '../../../components/ProfileInfo'
import ProfileSignName from '../../../components/ProfileSignName'
import styles from './style'
import LineSeparator from '../../../components/LineSeparator'
import { TextInput, TouchableOpacity } from 'react-native-gesture-handler'
import LargeButton from '../../../components/LargeButton'

export default function Home() {
  return (
    <View style={styles.containerWrapper}>
      <View style={styles.profileWrapper}>
        <ProfileInfo />
        <ProfileSignName />
      </View>
      <LineSeparator />
      <View style={styles.inputsView}>
        <Text style={styles.inputsTextLabel}>Dados Pessoais</Text>
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
      <LargeButton
        onPress={() => props.navigation.navigate('ProfessionalNavigation')}
        business
        text="ATUALIZAR DADOS" />
    </View>
  )
}
