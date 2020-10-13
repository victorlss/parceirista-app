import React, { useState } from "react";
import { connect } from "react-redux";
import {setUser} from '../../../store/actions/userActions'
import { View, Text, CheckBox, ScrollView, TextInput } from "react-native";
// import CheckBox from '@react-native-community/checkbox'
import CardScroll from "../../../components/CardScroll";
import LineSeparator from "../../../components/LineSeparator";
import Welcome from "../../../components/Welcome";
import FullInput from "../../../components/FullInput";
import LargeButton from "../../../components/LargeButton";
import styles from "./style";
import serviceApi from "../../../api/serviceApi";
import DemandCard from "../../../components/DemandCard";
import authApi from "../../../api/authApi";

function SignUp(props) {
  const [categories, setCategories] = useState([{}, {}]);
  const [active, setActive] = useState([]);
  serviceApi.getCategories().then((res) => {
    setCategories(res);
  });

  const createAccount = () => {
    authApi
      .login('profissional@gmail.com', '')
      .then((response) => {
        const user = response.data;

        if (!user._id) throw "User or password incorrect";

        props.setUser(user);
        props.navigation.navigate("ProfessionalWelcome");
      })
      .catch((err) => {
        console.log(err);
        setShowError(true);
      });
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.welcomeView}>
        <Welcome />
        <LineSeparator />
      </View>
      <View style={styles.inputsView}>
        <Text style={styles.inputsTextLabel}>Dados Pessoais</Text>
        <FullInput
          name="Nome"
          value={"Emerson Souza"}
          onChangeText={(text) => console.log(text)}
        />
        <FullInput
          name="CPF/CNPJ"
          value={"508.675.990-06"}
          onChangeText={(text) => console.log(text)}
        />
        <FullInput
          name="Telefone"
          value="(11) 98777-7777"
          onChangeText={(text) => console.log(text)}
        />
        <FullInput
          name="Email"
          value={"profissional@gmail.com"}
          onChangeText={(text) => console.log(text)}
        />
      </View>
      <View style={styles.serviceView}>
        <Text style={styles.inputsTextLabel}>Serviços</Text>
        <ScrollView horizontal={true}>
          {categories.map((service, i) => (
            <CardScroll
              key={`service-${i}`}
              professional
              name={service.name}
              icon={service.icon}
              style={{ opacity: 1 ? 1 : 0.5 }}
              onPress={() => select(i)}
            />
          ))}
        </ScrollView>
      </View>
      <View style={styles.acordoView}>
        <Text style={styles.inputsTextLabel}>Tipo de Acordo</Text>
        <View style={styles.checkboxView}>
          <View style={styles.checkboxElement}>
            <Text>
              {" "}
              <Text>
                Recebimento de 20% da receita do negócio que até a quitação do
                valor do serviço
              </Text>
            </Text>
          </View>
        </View>
      </View>
      <View style={styles.descriptionView}>
        <Text style={styles.inputsTextLabel}>Sobre mim</Text>
        <TextInput
          value={
            "Sou um profissional criativo que esta muito interessado em ajudar negocios a prosperarem"
          }
          style={styles.textAreaInput}
          multiline={true}
          onChangeText={(text) => console.log(text)}
        />
      </View>
      <LargeButton onPress={() => createAccount()} text="SER UM PARCEIRO" />
    </ScrollView>
  );
}

const mapStateToProps = function (state) {
  return {
    user: state.user,
  };
};

const mapDispatchToProps = {
  setUser: setUser,
};

export default connect(mapStateToProps, mapDispatchToProps)(SignUp);
