import React from "react";
import { CheckBox, Text, View } from "react-native";
import ProfileHeader from "../../../components/ProfileHeader";
import WorkInProgress from '../../../components/WorkInProgress'
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
      <WorkInProgress theme='business' leftTextTop='Entrega' date='Data: 19/10'/>
    </View>
  )
}
