import React from 'react'
import {View, Text} from 'react-native'
import styles from './styles'

export default function Welcome(props) {
  const {theme} = props
  const style = styles(theme)

  return (
    <View style={style.view}>
      <Text style={style.text}>
        Bem vindo!{'\n'}
        <Text style={style.textBold}>{props.children}</Text>
      </Text>
    </View>
  )
}
