import React from 'react'
import { View, Text } from 'react-native'
import styles from './style'
import Stars from '../../../components/Stars'
import { RectButton, ScrollView } from 'react-native-gesture-handler'
import DemandCard from '../../../components/DemandCard'
import ProfileHeader from '../../../components/ProfileHeader'

export default function Home() {
  return (
    <View style={styles.containerWrapper}>
      <ProfileHeader
        name="Priscila Tavares"
        url="https://avatars1.githubusercontent.com/u/54149914?s=460&u=e6a4306816a79fdcf1f4927c265ede6adcfb5a33&v=4"
        description={`Obrigado por ser um parceiro`}
      />
      <View style={styles.saldoContainerWrapper}>
        <Text style={styles.saldoTextLigth}>
          Saldo Total{'\n'}
          <Text style={styles.saldoText}>R$ 300,00</Text>
        </Text>
        <View style={styles.starsWrapper}>
          <Text style={styles.textStars}>Minhas avaliações</Text>
          <Stars />
        </View>
      </View>
      <View style={styles.buttonsWrapper}>
        <RectButton style={styles.parceirosButton}>
          <View style={[styles.parceirosButtonView, styles.activeButtonView]}>
            <Text
              style={[styles.parceirosButtonText, , styles.activeButtonText]}
            >
              Receber trabalhos
            </Text>
          </View>
        </RectButton>
        <RectButton style={styles.parceirosButton}>
          <View style={styles.parceirosButtonView}>
            <Text style={styles.parceirosButtonText}>Meus trabalhos</Text>
          </View>
        </RectButton>
      </View>
      <ScrollView
        contentContainerStyle={{
          paddingBottom: 16
        }}
      >
        <DemandCard />
        <DemandCard />
        <DemandCard />
        <DemandCard />
        <DemandCard />
        <DemandCard />
        <DemandCard />
        <DemandCard />
        <DemandCard />
        <DemandCard />
        <DemandCard />
      </ScrollView>
    </View>
  )
}
