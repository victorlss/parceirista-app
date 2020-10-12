import React, { useState } from "react";
import { connect } from 'react-redux';
import { Image, Text, TextInput, TouchableOpacity, View } from "react-native";
import {setUser} from '../../store/actions/userActions'
import styles from "./styles";
import logo from "../../assets/images/logo.png";
import authApi from "../../api/authApi";

const redirectUser = (user, navigation) => {
  return navigation.navigate(user.userType === 'professional' ? "ProfessionalNavigation" : "BusinessNavigation")
}

function Login(props) {
  if(props.user && props.user._id)
    redirectUser(props.user, props.navigation)

  const [showError, setShowError] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const login = async () => {
      authApi.login(username, password).then(response => {
      const user = response.data

      if(!user._id)
        throw 'User or password incorrect'

      props.setUser(user)
      redirectUser(user, props.navigation)
    }).catch(err => {
      console.log(err)
      setShowError(true)
    })
  }

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
          <Text style={styles.text} onPress={() => props.navigation.navigate("BusinessSignUp")}>
            Quero ser um parceiro!{" "}
            <Text style={styles.linkText}>Cadastrar</Text>
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const mapStateToProps = function (state) {
  return {
    user: state.user
  }
}

const mapDispatchToProps = {
  setUser: setUser,
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);
