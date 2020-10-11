import React from 'react'
import { View, Image, Text, CheckBox, TouchableOpacity, ScrollView, TextInput } from 'react-native'
// import CheckBox from '@react-native-community/checkbox'
import CardScroll from '../../../components/CardScroll'
import LineSeparator from '../../../components/LineSeparator'
import styles from './style'
import Welcome from "../../../components/Welcome";
import FullInput from '../../../components/FullInput'
import LargeButton from '../../../components/LargeButton'
import ProfileInfo from '../../../components/ProfileInfo'

export default function SignUp(props) {
  return (
    <ScrollView style={styles.container}>
      <ProfileInfo url="https://avatars1.githubusercontent.com/u/54149914?s=460&u=e6a4306816a79fdcf1f4927c265ede6adcfb5a33&v=4" />
      <View style={styles.welcomeView}>
        <Welcome />
        <LineSeparator />
      </View>
      <View style={styles.inputsView}>
        <Text style={styles.inputsTextLabel}>Dados Pessoais</Text>
        <FullInput 
          name="Nome"
          onChangeText={(text) => console.log(text)}
        />
        <FullInput 
          name="CPF/CNPJ"
          onChangeText={(text) => console.log(text)}
        />
        <FullInput 
          name="Telefone"
          onChangeText={(text) => console.log(text)}
        />
        <FullInput 
          name="Email"
          onChangeText={(text) => console.log(text)}
        />
      </View>
      <View style={styles.serviceView}>
        <Text style={styles.inputsTextLabel}>Serviços</Text>
        <ScrollView horizontal={true}>
          <CardScroll/>
          <CardScroll/>
          <CardScroll/>
          <CardScroll/>
          <CardScroll/>
          <CardScroll/>
          <CardScroll/>
        </ScrollView>
      </View>
      <View style={styles.acordoView}>
        <Text style={styles.inputsTextLabel}>Tipo de acordo</Text>
        <View style={styles.checkboxView}>
          <View style={styles.checkboxElement}>
            <CheckBox disabled={false}/>
            <Text>Pro porcentagem</Text>
          </View>
          <View style={styles.checkboxElement}>
            <CheckBox disabled={false}/>
            <Text>Pro porcentagem</Text>
          </View>
        </View>
      </View>
      <View style={styles.descriptionView}>
        <Text style={styles.inputsTextLabel}>Descrição</Text>
        <TextInput
          style={styles.textAreaInput}
          multiline={true}
          onChangeText={(text) => console.log(text)}
        />
      </View>
      <LargeButton
        onPress={() => props.navigation.navigate('ProfessionalNavigation')}
        text="SER UM PARCEIRO"
      />
    </ScrollView>
  )
}
