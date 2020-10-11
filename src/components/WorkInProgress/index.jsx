import React from 'react'
import {Dimensions, Text, View} from 'react-native'
import ProgressBar from '../ProgressBar';
import styles from './styles'
import colors from "../../styles/colors";

export default function WorkInProgress(props) {
  const {theme} = props;
  const style = styles(theme)

  return (
    <View>
      <View style={style.container}>
        <View style={style.leftView}>
          <Text style={[style.text, style.textColorLeftView]}>Recebido</Text>
          <Text style={[style.textBold, style.textColorLeftView]}>R$ 250,00</Text>
          <ProgressBar progress={0.7} width={100} height={20} color='#fff'/>
        </View>
        <View style={style.rigthView}>
          <Text style={style.textBold}>Multi Assessoria</Text>
          <Text style={style.text}>(22) 12681-1613</Text>
          <Text style={style.text}>asessoriamulti@gmail.com</Text>
        </View>
      </View>

      <View style={style.progressDetail}>
        <Text style={style.text}>Progresso</Text>
        <Text style={style.text}>Data da entrega: 19/10/2020</Text>
      </View>

      <ProgressBar progress={0.6} height={30} width={Dimensions.get('window').width - 40} color={colors[theme].primary}/>
    </View>
  )
}
