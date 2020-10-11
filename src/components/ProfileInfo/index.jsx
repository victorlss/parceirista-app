import React from 'react'
import { Image, Text, View } from 'react-native'
import styles from './styles'

export default function ProfileInfo() {
  return (
    <View style={styles.topView}>
      <Image
        style={styles.topImageProfile}
        source={{
          uri:
            'https://avatars1.githubusercontent.com/u/54149914?s=460&u=e6a4306816a79fdcf1f4927c265ede6adcfb5a33&v=4'
        }}
      />
      <Text style={styles.topInfo}>Obrigado por ser {'\n'} um parceiro</Text>
    </View>
  )
}
