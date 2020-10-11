import React from 'react'
import { View, Image, Text, CheckBox, TouchableOpacity, ScrollView, TextInput } from 'react-native'
// import CheckBox from '@react-native-community/checkbox'
import CardScroll from '../../../components/CardScroll'
import LineSeparator from '../../../components/LineSeparator'
import styles from './style'
import Welcome from "../../../components/Welcome";

export default function SignUp(props) {
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
        <Welcome />
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
        <TouchableOpacity style={styles.buttonWrapper} onPress={() => props.navigation.navigate('ProfessionalNavigation')}>
          <Text style={styles.textWrapper}>SER UM PARCEIRO</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  )
}
