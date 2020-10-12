import React from 'react'
import { View, Text } from 'react-native'
import ProfileHeader from '../../../components/ProfileHeader'
import ServicesCard from '../../../components/ServicesCard'
import CardInfoPayments from '../../../components/CardInfoPayments'
import styles from './styles'
import Icon from 'react-native-vector-icons/FontAwesome5'

export default function Progress() {
  return (
    <View style={styles.container}>
      <ProfileHeader />
      <View style={styles.paymentsTopView}>
        <Text style={styles.TextTopInfo}>Progresso de pagamento</Text>
        <View style={styles.serviceWrapper}></View>
        <CardInfoPayments name="Kauan Santos" orange color="#fd9644" />
        <View style={styles.serviceWrapper}></View>
        <CardInfoPayments name="Priscila Alves" orange color="#fd9644" />
      </View>
    </View>
  )
}
