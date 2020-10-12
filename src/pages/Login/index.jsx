import React, { useState } from "react";
import { Image, Text, TextInput, TouchableOpacity, View } from "react-native";
import styles from "./styles";
import logo from "../../assets/images/logo.png";
import authApi from "../../api/authApi";

export default function Login(props) {
  const [showError, setShowError] = useState(false);
  const login = () => {
    console.log(username, password);
    authApi
      .login(username, password)
      .then(() => {
        if (!authApi.isLogged()) return setShowError(true);

        setShowError(false)
        console.log(JSON.stringify(authApi.user));
        props.navigation.navigate(authApi.user.userType == 'professional' ? "ProfessionalNavigation" : "BusinessNavigation");
      })
      .catch((err) => {
        setShowError(true)
        console.log(JSON.stringify(err))
      });
  };

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  return (
    <View style={styles.container}>
      <View style={styles.topView}>
        <Image source={logo} resizeMode="contain" style={styles.logo} />
      </View>

      <View style={styles.formView}>
        <TextInput
          placeholder="Email"
          style={styles.textInput}
          onChangeText={(text) => setUsername(text)}
        />
        <TextInput
          placeholder="Senha"
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
