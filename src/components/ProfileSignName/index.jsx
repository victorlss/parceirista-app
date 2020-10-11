import React from 'react'
import { Text, View } from 'react-native'
import { RectButton } from 'react-native-gesture-handler'
import Icon from 'react-native-vector-icons/FontAwesome5'
import styles from './styles'

export default function ProfileSignName() {
  return (
    <View style={styles.nameWrapper}>
      <RectButton>
      <Text style={styles.nameText}>
        Parcerista, Priscila{' '}
        <Icon name="arrow-alt-circle-down" size={14} color="#fd9644" />{' '}
      </Text>

      </RectButton>
    </View>
  )
}
