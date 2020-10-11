import React from 'react'
import {View, Text} from 'react-native'
import styles from './styles'

export default function Welcome() {
  return (
    <View style={styles.welcomeView}>
      <Text style={styles.welcomeText}>
        Bem vindo!{'\n'}
        <Text style={styles.welcomeTextBold}>Crie sua conta gratuitamente!</Text>
      </Text>
    </View>
  )
}
