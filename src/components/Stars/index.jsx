import React from 'react'
import { View, StyleSheet } from 'react-native'
import Star from '../Star'

export default function Stars(props) {
  if (props.emptyStar) {
     return (
       <View style={{ flexDirection: 'row' }}>
         <Star emptyStar />
         <Star emptyStar />
         <Star emptyStar />
         <Star emptyStar />
         <Star emptyStar />
       </View>
     )
  }
  return (
    <View style={{ flexDirection: 'row' }}>
      <Star/>
      <Star/>
      <Star/>
      <Star/>
      <Star />
    </View>
  )
}

