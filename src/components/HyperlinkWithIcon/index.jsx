import React from 'react'
import {Image, Linking, Text, View} from 'react-native'
import styles from './styles'

export default function HyperlinkWithIcon(props) {
  const {icon, text, url} = props

  return (
    <View style={{flexDirection: 'row'}}>
      <Image source={icon} style={styles.logo}/>
      <Text style={styles.text} onPress={() => Linking.openURL(url)}>
        {text}
      </Text>
    </View>
  )
}
