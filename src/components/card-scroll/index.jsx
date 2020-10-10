import React from 'react'
import { View, Text } from 'react-native'
import styles from './styles'
import Icon from 'react-native-vector-icons/FontAwesome5'

export default function CardScroll() {
  return (
    <View style={styles.cardWrapper}>
      <Icon name="hands-helping" size={13} color="#a55eea" />
      <Text style={styles.textInfo}>Design Marketing</Text>
    </View>
  )
}
