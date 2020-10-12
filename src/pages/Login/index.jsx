import React, { useState } from "react";
import { connect } from 'react-redux';
import { Image, Text, TextInput, TouchableOpacity, View } from "react-native";
import {setUser} from '../../store/actions/userActions'
import styles from "./styles";
import logo from "../../assets/images/logo.png";
import authApi from "../../api/authApi";

function Login(props) {
  const [showError, setShowError] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const login = () => {
    authApi.login(username, password)
      .then(() => {
        if (!authApi.isLogged())
          return setShowError(true);

        const user = authApi.user;
        props.setUser({isLoggedIn: true, user})
        setShowError(false)

        console.log(JSON.stringify(user));
        props.navigation.navigate(user.userType === 'professional' ? "ProfessionalNavigation" : "BusinessNavigation");
      })
      .catch((err) => {
        setShowError(true)
        console.error(err)
      });
  };

  return (
    <View style={styles.container}>
      <View style={styles.topView}>
        <Image source={logo} resizeMode="contain" style={styles.logo} />
      </View>

      <View style={styles.formView}>
        <TextInput
          placeholder='Email'
          keyboardType='email-address'
          style={styles.textInput}
          onChangeText={(text) => setUsername(text)}
        />
        <TextInput
          placeholder='Senha'
          secureTextEntry={true}
          style={styles.textInput}
          onChangeText={(text) => setPassword(text)}
        />
        {showError ? (
          <Text style={{ color: "red" }}>Login ou senha incorretos</Text>
        ) : null}
      </View>

      <View style={styles.buttonView}>
        <TouchableOpacity style={styles.button} onPress={() => login()}>
          <Text style={styles.buttonText}>ENTRAR</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => props.navigation.navigate("Login")}>
          <Text
            style={styles.text}
            onPress={() => props.navigation.navigate("ProfessionalSignUp")}
          >
            Quero ser um parceiro!{" "}
            <Text style={styles.linkText}>Cadastrar</Text>
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const mapDispatchToProps = {
  setUser: setUser,
}

export default connect(null, mapDispatchToProps)(Login);
