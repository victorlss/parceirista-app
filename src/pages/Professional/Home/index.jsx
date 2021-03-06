import React, {Fragment, useEffect, useState} from "react";
import {View, Text, ScrollView} from "react-native";
import Stars from "../../../components/Stars";
import DemandProfessionalCard from "../../../components/DemandProfessionalCard";
import ProfileHeader from "../../../components/ProfileHeader";
import MediumButton from "../../../components/MediumButton";
import styles from "./style";
import WorkInProgress from "../../../components/WorkInProgress";
import contracts from './contract.mock'

export default function Home(props) {
  const theme = "professional"
  const [activeTab, setActiveTab] = useState(1);

  return (
    <View style={styles.containerWrapper}>
      <ProfileHeader/>

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
        <MediumButton
          text="Receber Trabalhos"
          isActive={activeTab === 1}
          onPress={() => setActiveTab(1)}
        />
        <MediumButton
          text="Meus Trabalhos"
          isActive={activeTab === 2}
          onPress={() => setActiveTab(2)}
        />
      </View>

      <ScrollView contentContainerStyle={{paddingBottom: 16}}>
        {activeTab === 1 ? (
          <Fragment>
            {contracts && contracts.length > 0 ? contracts.map((contract, index) => (
              <DemandProfessionalCard key={index} service={contract.service}/>
            )) : (
              <Text style={{fontSize: 16, color: 'lightgrey', textAlign: "center"}}>Sem demandas no momento {"\n"} Em
                breve você receberá propostas!</Text>
            )}
          </Fragment>
        ) : (
          <Fragment>
            <WorkInProgress theme={theme}/>
          </Fragment>
        )}
      </ScrollView>
    </View>
  )
}
