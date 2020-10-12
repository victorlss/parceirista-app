import React from 'react'
import {Text, View} from 'react-native'
import ProfileHeader from '../../../components/ProfileHeader'
import styles from './styles'

export default function Services() {
  return (
    <View style={styles.containerWrapper}>
      <ProfileHeader/>
      <Text>Adicionar aqui os serviços contratados</Text>
    </View>
  )
}
