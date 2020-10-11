import React from 'react'
import { View, Text } from 'react-native'
import styles from './style'
import { TextInput, TouchableOpacity } from 'react-native-gesture-handler'
import LargeButton from '../../../components/LargeButton'
import ProfileHeader from '../../../components/ProfileHeader'
import FullInput from '../../../components/FullInput'

export default function Home(props) {
  return (
    <View style={styles.containerWrapper}>
      <ProfileHeader
        name="Priscila Tavares"
        url="https://avatars1.githubusercontent.com/u/54149914?s=460&u=e6a4306816a79fdcf1f4927c265ede6adcfb5a33&v=4"
        />
      <View style={styles.inputsView}>
        <Text style={styles.inputsTextLabel}>Dados Pessoais</Text>
        <FullInput
          professional
          name="Nome"
          onChangeText={(text) => console.log(text)}
        />
        <FullInput
          professional
          name="CPF/CNPJ"
          onChangeText={(text) => console.log(text)}
        />
        <FullInput
          professional
          name="Telefone"
          onChangeText={(text) => console.log(text)}
        />
        <FullInput
          professional
          name="Email"
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
