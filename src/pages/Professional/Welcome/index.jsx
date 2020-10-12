import React, { Fragment, useState } from "react";
import { connect } from "react-redux";
import { ScrollView, Text, TouchableOpacity, View } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome5";
import Icon2 from "react-native-vector-icons/FontAwesome";
import WelcomeBar from "../../../components/WelcomeBar";
import styles from "./styles";
import LargeButton from "../../../components/LargeButton";
import ProgressBar from "../../../components/ProgressBar";
import WorkInProgress from "../../../components/WorkInProgress";

function Welcome(props) {
  const theme = "professional";
  const { user } = props;
  const [name, setName] = useState(user.name);
  const [email, setEmail] = useState(user.email);

  return (
    <Fragment>
      <WelcomeBar theme={theme}>
        <Text style={styles.welcomeTextBold}>Parcerista, Francisco.</Text>
      </WelcomeBar>
      <ScrollView style={styles.container}>
        <Text style={[styles.text, { marginTop: 20 }]}>
          Alcance medalhas e ganhe mais visibilidade
        </Text>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-around",
            marginTop: 5,
            marginBottom: 20,
          }}
        >
          <Icon style={{}} name="medal" size={40} color={"#F1C40F"} />
          <Icon style={{}} name="medal" size={40} color={"#778CA3"} />
          <Icon style={{}} name="medal" size={40} color={"#8C6666"} />
        </View>

        <Text style={styles.text}>
          Conclua as metas de entregas \n Receba feedback positivo
        </Text>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-around",
            marginTop: 5,
            marginBottom: 20,
          }}
        >
          <Icon2 style={{}} name="star" size={40} color={"#F1C40F"} />
          <Icon2 style={{}} name="star" size={40} color={"#F1C40F"} />
          <Icon2 style={{}} name="star" size={40} color={"#F1C40F"} />
          <Icon2 style={{}} name="star" size={40} color={"#F1C40F"} />
          <Icon2 style={{}} name="star" size={40} color={"#F1C40F"} />
        </View>

        <Text style={styles.text}>
          Informe ao seu parceiro os progressos do seu trabalho
        </Text>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-around",
            marginTop: 5,
            marginBottom: 20,
          }}
        >
          <ProgressBar progress={0.4} width={250} height={20} color="#FFB67B" />
        </View>

        <Text style={styles.text}>Acompanhe o recebimento</Text>

        <WorkInProgress theme={"professional"} sizeFactor={90} />
      </ScrollView>
      <LargeButton
        professional
        text={"PROXIMO"}
        onPress={() => props.navigation.navigate("ProfessionalNavigation")}
      />
    </Fragment>
  );
}

const mapStateToProps = function (state) {
  return {
    user: state.user,
  };
};

export default connect(mapStateToProps)(Welcome);
