import React, { useState } from 'react'
import { View, Text } from 'react-native'
import ProfileHeader from '../../../components/ProfileHeader'
import FullInput from '../../../components/FullInput'
import MediumButton from '../../../components/MediumButton'
import styles from './styles'
import LargeButton from '../../../components/LargeButton'
import ServicesCard from '../../../components/ServicesCard'
import Icon from 'react-native-vector-icons/FontAwesome5'
import CardInfoPayments from '../../../components/CardInfoPayments'

export default function AddCard() {
  const [activeTab, setActiveTab] = useState(1)
  return (
    <View style={styles.container}>
      <ProfileHeader />
      <View style={styles.buttons}>
        <MediumButton
          text="Pagamento"
          business
          isActive={activeTab === 1}
          onPress={() => setActiveTab(1)}
        />
        <MediumButton
          business
          text="Meu Cartão"
          isActive={activeTab === 2}
          onPress={() => setActiveTab(2)}
        />
      </View>
      {activeTab === 1 ? (
        <View style={styles.paymentsTopView}>
          <Text style={styles.TextTopInfo}>
            Informar progresso de pagamento
          </Text>
          <View style={styles.serviceWrapper}>
            <ServicesCard
              icon={<Icon name="pencil-alt" size={20} color="#a55eea" />}
              text="Design Marketing"
            />
          </View>
          <CardInfoPayments name="Kauan Santos" color="#a55eea" />
          <View style={styles.serviceWrapper}>
            <ServicesCard
              icon={<Icon name="calculator" size={20} color="#a55eea" />}
              text="Contabilidabe"
            />
          </View>
          <CardInfoPayments name="Priscila Alves" />
        </View>
      ) : (
        <View style={styles.cardViewWrapper}>
          <FullInput name="Número do cartão" business />
          <FullInput name="Nome impresso no cartão" business />
          <FullInput name="MM/AA" business />
          <FullInput name="CVV" business />
          <LargeButton business text="CADASTRAR DADOS" />
        </View>
      )}
    </View>
  )
}
