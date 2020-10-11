import React from 'react'
import { View, Text } from 'react-native'
import styles from './style'
import { TextInput, TouchableOpacity } from 'react-native-gesture-handler'

export default function FullInput(props) {
  const isBusiness = props.business != undefined;
  return (
        <TextInput
          placeholder={props.name}
          style={styles(isBusiness).textInput}
          onChangeText={props.onChangeText}
        />
  )
}
