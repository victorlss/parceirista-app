import React from 'react'
import {View, Text, TouchableOpacity, Image} from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'
import LineSeparator from "../../../components/LineSeparator"
import styles from './styles'
import logoSmall from '../../../assets/images/logo-small.png'
import Welcome from "../../../components/Welcome";

export default function SignUp(props) {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.headerView}>
        <Image style={styles.logo} source={logoSmall}/>
        <Text style={styles.headerText}>Crescimento para seu empreendimento</Text>
      </View>
      <Welcome />
      <LineSeparator />
    </ScrollView>
  )
}
