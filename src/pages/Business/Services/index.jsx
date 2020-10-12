import React from "react";
import { CheckBox, Text, View } from "react-native";
import ProfileHeader from "../../../components/ProfileHeader";
import WorkInProgress from '../../../components/WorkInProgress'
import ServicesCard from "../../../components/ServicesCard";
import styles from "./styles";
import Icon from "react-native-vector-icons/FontAwesome5";
import Stars from "../../../components/Stars";
import Star from "../../../components/Star";
import LineSeparator from "../../../components/LineSeparator";

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
      <WorkInProgress
        theme="business"
        leftTextTop="Entrega"
        date="Data: 19/10"
      />
      <View style={styles.avaliationWrapper}>
        <View style={styles.avaliationTopContent}>
          <Text style={styles.avaliationText}>Avaliar Priscila</Text>
          <Stars emptyStar />
        </View>
        <Text style={styles.avaliationDownContent}>
          Não deixe de avaliar os seus parceiristas, vamos crescer juntos
        </Text>
      </View>
      <LineSeparator />
    </View>
  )
}
