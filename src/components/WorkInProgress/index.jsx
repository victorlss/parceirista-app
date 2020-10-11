import React from 'react'
import {View, Text, TouchableHighlight, TouchableOpacity} from 'react-native'
import styles from './styles'
import Icon from 'react-native-vector-icons/FontAwesome5'
import {RectButton} from 'react-native-gesture-handler'

export default function WorkInProgress(props) {
  const {theme} = props;
  const style = styles(theme)

  return (
    <View style={style.container}>
      <View style={style.leftView}>
        <Text style={[style.text, style.textColorLeftView]}>Recebido</Text>
        <Text style={[style.text, style.textColorLeftView]}>R$ 250,00</Text>
      </View>
      <View style={style.rigthView}>
        <Text style={style.textBold}>Multi Assessoria</Text>
        <Text style={style.text}>(22) 12681-1613</Text>
        <Text style={style.text}>asessoriamulti@gmail.com</Text>
      </View>
    </View>
  )
}
