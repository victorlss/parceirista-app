import React from 'react'
import {View, Text} from 'react-native'
import styles from './styles'

export default function WorkInProgress(props) {
  const {theme} = props;
  const style = styles(theme)

  return (
    <View style={style.container}>
      <View style={style.leftView}>
        <Text style={[style.text, style.textColorLeftView]}>Recebido</Text>
        <Text style={[style.textBold, style.textColorLeftView]}>R$ 250,00</Text>
        <Text style={[style.text, style.textColorLeftView]}>PROGRESS_BAR</Text>
      </View>
      <View style={style.rigthView}>
        <Text style={style.textBold}>Multi Assessoria</Text>
        <Text style={style.text}>(22) 12681-1613</Text>
        <Text style={style.text}>asessoriamulti@gmail.com</Text>
      </View>
    </View>
  )
}
