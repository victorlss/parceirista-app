import React from 'react'
import { View, Text } from 'react-native'
import styles from './style'
import { TouchableOpacity } from 'react-native-gesture-handler'

export default function LargeButton(props) {
  const innerContent = props.children ? props.children : <Text style={styles(props.type).textWrapper}>{props.text}</Text>
  const isBusiness = props.professional != undefined;
  return (
      <View style={styles(isBusiness).buttonView}>
        <TouchableOpacity style={styles(isBusiness).buttonWrapper} onPress={props.onPress}>
          { innerContent }
        </TouchableOpacity>
      </View>
  )
}
