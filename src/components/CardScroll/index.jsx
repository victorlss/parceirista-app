import React from 'react'
import { View, Text } from 'react-native'
import styles from './styles'
import Icon from 'react-native-vector-icons/FontAwesome5'
import { RectButton } from 'react-native-gesture-handler'

export default function CardScroll({purple}) {
  if (!purple) {
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
  } else {
    return (
      <RectButton style={styles.cardWrapperPurple}>
        <Icon
          style={styles.iconWrapperPurple}
          name="hands-helping"
          size={40}
          color="#a55eea"
        />
        <Text style={styles.textInfoPurple}>Design Marketing</Text>
      </RectButton>
    )
  }
}
