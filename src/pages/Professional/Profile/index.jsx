import React, {Fragment, useState} from 'react'
import {View, Text} from 'react-native'
import styles from './style'
import LargeButton from '../../../components/LargeButton'
import ProfileHeader from '../../../components/ProfileHeader'
import FullInput from '../../../components/FullInput'
import MediumButton from '../../../components/MediumButton'

export default function Home(props) {
  const [activeTab, setActiveTab] = useState(1);

  return (
    <View style={styles.containerWrapper}>
      <ProfileHeader
        name="Priscila Tavares"
        url="https://avatars1.githubusercontent.com/u/54149914?s=460&u=e6a4306816a79fdcf1f4927c265ede6adcfb5a33&v=4"
      />

      <View style={styles.buttonsWrapper}>
        <MediumButton text="Dados Pessoais" isActive={activeTab === 1} onPress={() => setActiveTab(1)}/>
        <MediumButton text="Dados Bancarios" isActive={activeTab === 2} onPress={() => setActiveTab(2)}/>
      </View>

      <View style={styles.inputsView}>
        {activeTab === 1 ? (
          <Fragment>
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
          </Fragment>
        ) : (
          <Fragment>
            <Text style={styles.inputsTextLabel}>Dados Bancarios</Text>
            <FullInput
              professional
              name="Banco"
              onChangeText={(text) => console.log(text)}
            />
            <FullInput
              professional
              name="Conta Corrente"
              onChangeText={(text) => console.log(text)}
            />
            <FullInput
              professional
              name="Nome Completo"
              onChangeText={(text) => console.log(text)}
            />
            <FullInput
              professional
              name="CPF"
              onChangeText={(text) => console.log(text)}
            />
          </Fragment>
        )}
      </View>

      <LargeButton
        onPress={() => props.navigation.navigate("ProfessionalNavigation")}
        business
        text="ATUALIZAR DADOS"/>
    </View>
  );
}
