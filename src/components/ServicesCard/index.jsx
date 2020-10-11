import React from 'react'
import { View, Text } from 'react-native'

import styles from './styles'

export default function ServicesCard(props) {
  return (
      <View style={styles.cardServicesWrapper}>
        <View style={styles.cardTextWrapper}>
          {props.icon}
          <Text style={styles.cardTextLabel}>{props.text}</Text>
        </View>
      </View>
  )
}
