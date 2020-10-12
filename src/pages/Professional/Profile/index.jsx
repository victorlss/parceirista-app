import React, {Fragment, useState} from 'react'
import {connect} from "react-redux";
import {View, Text} from 'react-native'
import styles from './style'
import LargeButton from '../../../components/LargeButton'
import ProfileHeader from '../../../components/ProfileHeader'
import FullInput from '../../../components/FullInput'
import MediumButton from '../../../components/MediumButton'

function Profile(props) {
  const {user} = props
  const [activeTab, setActiveTab] = useState(1);
  const [name, setName] = useState(user.name);
  const [email, setEmail] = useState(user.email);

  return (
    <View style={styles.containerWrapper}>
      <ProfileHeader/>

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
              value={name}
              name="Nome"
              onChangeText={(text) => setName(text)}
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
              value={email}
              name="Email"
              onChangeText={(text) => setEmail(text)}
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

const mapStateToProps = function (state) {
  return {
    user: state.user
  }
}

export default connect(mapStateToProps)(Profile);
