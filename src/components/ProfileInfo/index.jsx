import React from 'react'
import { Image, Text, View } from 'react-native'
import styles from './styles'

export default function ProfileInfo(props) {
  return (
    <View style={styles.topView}>
      <Image
        style={styles.topImageProfile}
        source={{
          uri: props.url          
        }}
      />
      <Text style={styles.topInfo}>Obrigado por ser {'\n'} um parceiro</Text>
    </View>
  )
}
