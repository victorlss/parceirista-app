import React from 'react'
import {View, Text, TouchableOpacity, Image} from 'react-native'
import {ScrollView, TextInput} from 'react-native-gesture-handler'
import WelcomeBar from "../../../components/WelcomeBar";
import styles from './styles'

export default function SignUp(props) {
  return (
    <ScrollView style={styles.container}>
      <WelcomeBar>
        <Text style={styles.welcomeTextBold}>Parcerista, Francisco.</Text>
      </WelcomeBar>
      <View style={styles.buttonView}>
        <TouchableOpacity style={styles.button} onPress={() => props.navigation.navigate('BusinessNavigation')}>
          <Text style={styles.buttonText}>PROXIMO</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  )
}
