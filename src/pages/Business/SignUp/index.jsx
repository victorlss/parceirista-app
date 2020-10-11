import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'
import styles from './styles'

export default function SignUp(props) {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.buttonView}>
        <TouchableOpacity style={styles.buttonWrapper} onPress={() => props.navigation.navigate('BusinessNavigation')}>
          <Text style={styles.textWrapper}>SER UM PARCEIRISTA</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  )
}
