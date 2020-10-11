import React from 'react'
import { View, Text, ScrollView } from 'react-native'
import styles from './style'
import LineSeparator from '../../../components/LineSeparator'
import DemandCard from '../../../components/DemandCard'
import CardScroll from '../../../components/CardScroll'
import ProfileHeaderSignUp from '../../../components/ProfileHeaderSignUp'

export default function Home() {
  return (
    <View style={styles.containerWrapper}>
      <ProfileHeaderSignUp description='Crescimento para o seu negócio'/>
      <View style={styles.serviceView}>
        <Text style={styles.inputsTextLabel}>Serviços</Text>
        <Text style={styles.inputsTextDescription}>
          Selecione um serviço para filtrar
        </Text>
        <ScrollView horizontal={true}>
          <CardScroll purple={true} />
          <CardScroll purple={true} />
          <CardScroll purple={true} />
          <CardScroll purple={true} />
          <CardScroll purple={true} />
          <CardScroll purple={true} />
        </ScrollView>
      </View>
      <View style={styles.lineWrapper}>
        <LineSeparator />
      </View>
      <ScrollView
        contentContainerStyle={{
          paddingBottom: 16,
          paddingTop: 5
        }}
      >
        <DemandCard purple />
        <DemandCard purple />
        <DemandCard purple />
        <DemandCard purple />
        <DemandCard purple />
        <DemandCard purple />
        <DemandCard purple />
        <DemandCard purple />
        <DemandCard purple />
        <DemandCard purple />
      </ScrollView>
    </View>
  )
}
