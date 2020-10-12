import React from "react";
import { CheckBox, Text, View } from "react-native";
import ProfileHeader from "../../../components/ProfileHeader";
import ServicesCard from "../../../components/ServicesCard";
import styles from "./styles";
import Icon from "react-native-vector-icons/FontAwesome5";

export default function Services() {
  return (
    <View style={styles.containerWrapper}>
      <ProfileHeader />
      <View style={styles.servicesWrapper}>
        <ServicesCard
          icon={<Icon name="pencil-alt" size={20} color="#a55eea" />}
          text="Design Marketing"
        />
      </View>
      <Text>Adicionar aqui os serviços contratados</Text>
    </View>
  )
}
