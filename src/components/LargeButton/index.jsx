import React from 'react'
import { View, Text } from 'react-native'
import styles from './style'
import { TouchableOpacity } from 'react-native-gesture-handler'

export default function LargeButton(props) {
  const innerContent = props.children ? props.children : <Text style={styles(props.type).textWrapper}>{props.text}</Text>
  const type = props.professional != undefined ? 'professional' : 'business'
  return (
      <View style={styles(type).buttonView}>
        <TouchableOpacity style={styles(type).buttonWrapper}>
          { innerContent }
        </TouchableOpacity>
      </View>
  )
}
