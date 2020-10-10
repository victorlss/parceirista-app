import React from 'react'
import { View, Image, Text } from 'react-native'
import { FlatList, ScrollView, TextInput } from 'react-native-gesture-handler'
import CardScroll from '../../components/card-scroll'
import styles from './styles'

export default function CadastroFornecedor() {
  return (
    <View style={styles.container}>
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
            Crie su conta gratuitamente!
          </Text>
        </Text>
        <View style={styles.hrWelcomeDown}></View>
      </View>
      <View style={styles.inputsView}>
        <Text style={styles.inputsTextLabel}>Dados Pessoais</Text>
        <TextInput
          placeholder="Nome"
          style={styles.textInput}
          onChangeText={(text) => console.log(text)}
        ></TextInput>
        <TextInput
          placeholder="CPF/CNPJ"
          style={styles.textInput}
          onChangeText={(text) => console.log(text)}
        ></TextInput>
        <TextInput
          placeholder="Telefone"
          style={styles.textInput}
          onChangeText={(text) => console.log(text)}
        ></TextInput>
        <TextInput
          placeholder="Email"
          style={styles.textInput}
          onChangeText={(text) => console.log(text)}
        ></TextInput>
      </View>
      <View style={styles.serviceView}>
        <Text style={styles.inputsTextLabel}>Serviços</Text>
        <ScrollView horizontal={true}>
          <CardScroll />
        </ScrollView>
      </View>
    </View>
  )
}
