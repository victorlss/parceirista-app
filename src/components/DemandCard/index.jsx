import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import styles from './styles'
import Icon from 'react-native-vector-icons/FontAwesome5'
import { RectButton } from 'react-native-gesture-handler'

export default function DemandCard(props) {
  const {purple, navigate} = props

  if (!purple) {
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
          </RectButton >
        </View>
      </View>
    )
  } else {
    return (
      <TouchableOpacity
        style={styles.containerWrapper}
        onPress={() => console.log('eu')}
      >
        <View style={styles.leftCard}>
          <Text style={styles.strongText}>Priscila Alvez</Text>
          <Text style={styles.text}>Design Marketing</Text>
          <Text style={styles.text}>(67) 1456346-45</Text>
        </View>
        <View style={styles.rigthCard}>
          <Text style={styles.strongText}>Serviços</Text>
          <Text style={styles.text}>Logomarca</Text>
          <Text style={styles.text}>Arte para instagram</Text>
          <TouchableOpacity onPress={() => navigate()}>
            <Text style={styles.purpleText}>
              <Icon name="check" size={13} color="#a55eea" /> Solicitar serviço
            </Text>
          </TouchableOpacity>
        </View>
      </TouchableOpacity>
    )
  }
}
