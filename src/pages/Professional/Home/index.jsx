import React from 'react'
import { View, Text } from 'react-native'
import ProfileInfo from '../../../components/ProfileInfo'
import ProfileSignName from '../../../components/ProfileSignName'
import styles from './style'
import LineSeparator from '../../../components/LineSeparator'
import Stars from '../../../components/Stars'
import { RectButton, ScrollView } from 'react-native-gesture-handler'
import DemandCard from '../../../components/DemandCard'

export default function Home() {
  return (
    <View style={styles.containerWrapper}>
      <View style={styles.profileWrapper}>
        <ProfileInfo />
        <ProfileSignName />
      </View>
      <LineSeparator />
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
            <Text style={[styles.parceirosButtonText, , styles.activeButtonText]}>Receber trabalhos</Text>
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
