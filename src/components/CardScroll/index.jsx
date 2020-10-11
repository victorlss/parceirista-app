import React from 'react'
import { View, Text } from 'react-native'
import styles from './styles'
import Icon from 'react-native-vector-icons/FontAwesome5'
import { RectButton } from 'react-native-gesture-handler'

export default function CardScroll() {
  return (
    <RectButton style={styles.cardWrapper}>
      <Icon
        style={styles.iconWrapper}
        name="hands-helping"
        size={40}
        color="#fd9644"
      />
      <Text style={styles.textInfo}>Design Marketing</Text>
    </RectButton>
  )
}
