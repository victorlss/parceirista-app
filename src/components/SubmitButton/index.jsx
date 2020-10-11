import React from 'react'
import styles from './styles'
import { RectButton } from 'react-native-gesture-handler'
import { Text } from 'react-native'

export default function SubmitButton() {
  return (
    <RectButton style={styles.buttonWrapper}>
      <Text style={styles.textWrapper}>SER UM PARCEIRO</Text>
    </RectButton>
  )
}
