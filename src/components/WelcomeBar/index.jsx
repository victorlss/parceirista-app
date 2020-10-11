import React from 'react'
import {View, Text} from 'react-native'
import styles from './styles'

export default function Welcome(props) {
  return (
    <View style={styles.welcomeView}>
      <Text style={styles.welcomeText}>
        Bem vindo!{'\n'}
        <Text style={styles.welcomeTextBold}>{props.children}</Text>
      </Text>
    </View>
  )
}
