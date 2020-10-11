import React, {Fragment, useState} from "react";
import {View, Text, ScrollView} from "react-native";
import Stars from "../../../components/Stars";
import DemandCard from "../../../components/DemandCard";
import ProfileHeader from "../../../components/ProfileHeader";
import MediumButton from "../../../components/MediumButton";
import styles from "./style";
import WorkInProgress from "../../../components/WorkInProgress";

export default function Home() {
  const [activeTab, setActiveTab] = useState(1);
  const theme = 'professional'

  return (
    <View style={styles.containerWrapper}>
      <ProfileHeader
        name="Priscila Tavares"
        url="https://avatars1.githubusercontent.com/u/54149914?s=460&u=e6a4306816a79fdcf1f4927c265ede6adcfb5a33&v=4"
      />

      <View style={styles.saldoContainerWrapper}>
        <Text style={styles.saldoTextLigth}>
          Saldo Total{"\n"}
          <Text style={styles.saldoText}>R$ 300,00</Text>
        </Text>
        <View style={styles.starsWrapper}>
          <Text style={styles.textStars}>Minhas avaliações</Text>
          <Stars/>
        </View>
      </View>

      <View style={styles.buttonsWrapper}>
        <MediumButton text="Receber Trabalhos" isActive={activeTab === 1} onPress={() => setActiveTab(1)}/>
        <MediumButton text="Meus Trabalhos" isActive={activeTab === 2} onPress={() => setActiveTab(2)}/>
      </View>

      <ScrollView contentContainerStyle={{paddingBottom: 16}}>
        {activeTab === 1 ? (
          <Fragment>
            <DemandCard/>
            <DemandCard/>
            <DemandCard/>
            <DemandCard/>
            <DemandCard/>
            <DemandCard/>
            <DemandCard/>
            <DemandCard/>
            <DemandCard/>
            <DemandCard/>
            <DemandCard/>
          </Fragment>
        ) : (
          <Fragment>
            <WorkInProgress theme={theme}/>
          </Fragment>
        )}
      </ScrollView>
    </View>
  );
}
