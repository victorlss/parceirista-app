import React from 'react'
import { View, Text } from 'react-native'
import styles from './styles'
import Icon from 'react-native-vector-icons/FontAwesome5'
import { RectButton } from 'react-native-gesture-handler'

export default function DemandCard() {
  return (
    <View style={styles.containerWrapper}>
      <View style={styles.leftCard}>
        <Text style={styles.strongText}>Bolo no pote da Ana</Text>
        <Text style={styles.text}>Ana Lúcia Oliveira</Text>
        <Text style={styles.text}>(67) 1456346-45</Text>
        <Text style={styles.text}>Acordo por porcentagem</Text>
      </View>
      <View style={styles.rigthCard}>
        <Text style={styles.strongText}>Bolo no pote da Ana</Text>
        <Text style={styles.text}>Ana Lúcia Oliveira</Text>
        <Text style={styles.text}>(67) 1456346-45</Text>
        <RectButton>
          <Text style={styles.orangeText}>
            <Icon name="check" size={13} color="#fd9644" /> Aceitar serviço
          </Text>
        </RectButton>
      </View>
    </View>
  )
}
