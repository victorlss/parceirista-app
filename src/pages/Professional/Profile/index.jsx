import React, {Fragment, useState} from 'react'
import {connect} from "react-redux";
import { View, Text, Image} from 'react-native'
import styles from './style'
import LargeButton from '../../../components/LargeButton'
import ProfileHeader from '../../../components/ProfileHeader'
import FullInput from '../../../components/FullInput'
import MediumButton from '../../../components/MediumButton'
import getnet_logo from "../../../assets/images/getnet.png";

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
        <MediumButton text="Dados GetNet" isActive={activeTab === 2} onPress={() => setActiveTab(2)}/>
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
              value={'508.675.990-06'}
              onChangeText={(text) => console.log(text)}
            />
            <FullInput
              professional
              name="Telefone"
              value={'(11) 98777-7777'}
              onChangeText={(text) => console.log(text)}
            />
            <FullInput
              professional
              value={email}
              name="Email"
              onChangeText={(text) => setEmail(text)}
            />

            <LargeButton
              onPress={() => props.navigation.navigate("ProfessionalNavigation")}
              professional
              text="ATUALIZAR DADOS"/>
          </Fragment>
        ) : (
          <Fragment>
            <View style={{ alignContent: "center", alignItems: "center" }}>
              <Image source={getnet_logo} resizeMode="contain" style={{width:'50%'}} />
              <Text style={[styles.inputsTextLabel]}>
                Conta sincronizada com a GETNET
              </Text>
              <Text
                style={[
                  styles.inputsTextLabel,
                  { fontSize: 12, color: "#fd9644" },
                ]}
              >
                Termo de Autorização Aceito
              </Text>
              <Text style={[styles.inputsTextLabel]}>
                Data do aceite: 10/10/2020
              </Text>
            </View>
            <LargeButton
              professional
              text="ATUALIZAR INTEGRAÇÃO"
            />
          </Fragment>
        )}
      </View>
    </View>
  );
}

const mapStateToProps = function (state) {
  return {
    user: state.user
  }
}

export default connect(mapStateToProps)(Profile);
