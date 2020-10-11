import React from 'react'
import { View, StyleSheet } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome'

export default function Star() {
  return (
    <View style={styles.star}>
      <Icon name="star" size={15} color="#F1C40F" />
    </View>
  )
}

const styles = StyleSheet.create({
  star: {
    marginRight: 5
  }
})
