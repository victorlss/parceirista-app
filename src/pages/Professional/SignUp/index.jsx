/* import React from 'react'
<<<<<<< HEAD:src/pages/Professional/SignUp/index.jsx
import {View, Image, Text, CheckBox} from 'react-native'
import {RectButton, ScrollView, TextInput} from 'react-native-gesture-handler'
//import CheckBox from '@react-native-community/checkbox'
import CardScroll from '../../../components/CardScroll'
import styles from './styles'
import SubmitButton from '../../../components/SubmitButton' */

import { View, Image, Text, CheckBox } from 'react-native'
import { RectButton, ScrollView, TextInput } from 'react-native-gesture-handler'
import CardScroll from '../../components/CardScroll'
import styles from './styles'
import SubmitButton from '../../components/SubmitButton'
import LineSeparator from '../../components/LineSeparator'

export default function ProfessionalSignUp() {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.topView}>
        <Image
          style={styles.topImageProfile}
          source={{
            uri:
              'https://avatars1.githubusercontent.com/u/54149914?s=460&u=e6a4306816a79fdcf1f4927c265ede6adcfb5a33&v=4'
          }}
        />
        <Text style={styles.topInfo}>Obrigado por ser {'\n'} um parceiro</Text>
      </View>
      <View style={styles.welcomeView}>
        <Text style={styles.welcomeText}>
          Bem vindo! {'\n'}
          <Text style={styles.welcomeTextStrong}>
            Crie sua conta gratuitamente!
          </Text>
        </Text>
        <View style={styles.hrWelcomeDown}/>
        <LineSeparator />
      </View>
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
      <View style={styles.buttonView}>
        <SubmitButton/>
      </View>
    </ScrollView>
  )
}
