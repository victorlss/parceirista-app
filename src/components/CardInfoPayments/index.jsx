import React from 'react'
import { Text, View } from 'react-native'
import ProgressBar from '../ProgressBar'
import styles from './styles'

export default function CardInfoPayments() {
  return (
    <View style={styles.container}>
      <View style={styles.topContent}>
        <Text style={styles.textTopContent}>Priscila Alvez</Text>
        <ProgressBar
          width={188}
          height={20}
          color="#a55eea"
          progress={0.56}
          borderWith={1}
          borderColor="#a55eea"
        />
      </View>
      <View style={styles.DownContent}>
        <View style={styles.boxDownContent}>
          <Text style={styles.textDownContent}>+ 10%</Text>
        </View>
        <View style={styles.boxDownContent}>
          <Text style={styles.textDownContent}>+ 50%</Text>
        </View>
        <View style={styles.boxDownContent}>
          <Text style={styles.textDownContent}>+ 100%</Text>
        </View>
      </View>
    </View>
  )
}
