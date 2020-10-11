import React from 'react'
import { View, StyleSheet } from 'react-native'
import Star from '../Star'

export default function Stars() {
  return (
    <View style={{ flexDirection: 'row' }}>
      <Star/>
      <Star/>
      <Star/>
      <Star/>
      <Star />
    </View>
  )
}

