import React from 'react'
import styles from './style'
import {TextInput} from 'react-native-gesture-handler'

export default function FullInput(props) {
  const isBusiness = props.business !== undefined;
  return (
    <TextInput
      value={props.value}
      placeholder={props.name}
      style={styles(isBusiness).textInput}
      onChangeText={props.onChangeText}
    />
  )
}
