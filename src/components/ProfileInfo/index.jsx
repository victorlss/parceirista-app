import React from 'react'
import { Image, Text, View } from 'react-native'
import styles from './styles'

export default function ProfileInfo(props) {
  if (props.signup) {
    return (
      <View style={styles.topView}>
        <Image
          style={styles.topImageProfile}
          source={require('../../assets/images/logo.png')}
        />
        <Text style={styles.topInfo}>{props.description}</Text>
      </View>
    )
  } else {
    return (
      <View style={styles.topView}>
        <Image
          style={styles.topImageProfile}
          source={{ uri: props.uri}}
        />
        <Text style={styles.topInfo}>{props.description}</Text>
      </View>
    )
  }
}
