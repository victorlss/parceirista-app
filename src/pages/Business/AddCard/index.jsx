import React from 'react'
import { View } from 'react-native'
import ProfileHeader from '../../../components/ProfileHeader'
import FullInput from '../../../components/FullInput'
import styles from './styles'
import LargeButton from '../../../components/LargeButton'

export default function AddCard() {
  return (
    <View style={styles.container}>
      <ProfileHeader
        name="Abner"
        url="https://avatars1.githubusercontent.com/u/54149914?s=460&u=e6a4306816a79fdcf1f4927c265ede6adcfb5a33&v=4"
        description="Crescimento para o seu negócio"
      />
      <FullInput name='Número do cartão' business/>
      <FullInput name='Nome impresso no cartão' business/>
      <FullInput name='MM/AA' business/>
      <FullInput name='CVV' business/>
      <LargeButton professional text='ATUALIZAR DADOS'/>
    </View>
  )
}
