import React from 'react'
import { View, Text } from 'react-native'
import { RectButton, ScrollView } from 'react-native-gesture-handler'
import styles from './styles'

export default function BusinessSignUp(props) {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.buttonView}>
        <RectButton style={styles.buttonWrapper} onPress={() => props.navigation.navigate('BusinessNavigation')}>
          <Text style={styles.textWrapper}>SER UM PARCEIRISTA</Text>
        </RectButton>
      </View>
    </ScrollView>
  )
}
