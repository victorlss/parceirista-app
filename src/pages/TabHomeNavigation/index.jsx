import React from 'react'
import { View } from 'react-native'
import ProfileInfo from '../../components/ProfileInfo'
import ProfileSignName from '../../components/ProfileSignName'
import styles from './style'
import LineSeparator from '../../components/LineSeparator'

export default function TabHomeNavigation() {
  return (
    <View style={styles.containerWrapper}>
      <View style={styles.profileWrapper}>
        <ProfileInfo />
        <ProfileSignName />
      </View>
      <LineSeparator/>
      <View>
        
      </View>
    </View>
  )
}
