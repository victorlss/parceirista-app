import React from 'react'
import { Text, View } from 'react-native'
import ProgressBar from '../ProgressBar'
import styles from './styles'

export default function CardInfoPaymentsProfessional(props) {
  return (
    <View style={props.orange ? styles.containerOrange : styles.container}>
      <View style={styles.topContent}>
        <Text style={styles.textTopContent}>{props.name}</Text>
        <ProgressBar
          width={188}
          height={20}
          color={props.color}
          progress={0.56}
          borderWith={1}
          borderColor={props.color}
        />
      </View>
      <View style={styles.DownContent}>
        <View
          style={
            props.orange ? styles.boxDownContentOrange : styles.boxDownContent
          }
        >
          <Text style={styles.textDownContent}>+ 10%</Text>
        </View>
        <View
          style={
            props.orange ? styles.boxDownContentOrange : styles.boxDownContent
          }
        >
          <Text style={styles.textDownContent}>+ 50%</Text>
        </View>
        <View
          style={
            props.orange ? styles.boxDownContentOrange : styles.boxDownContent
          }
        >
          <Text style={styles.textDownContent}>+ 100%</Text>
        </View>
      </View>
    </View>
  )
}
