import React from 'react'
import { Bar } from 'react-native-progress'

export default function ProgressBar(props) {
  return (
    <Bar progress={props.progress} width={props.width} color={props.color} height={props.height} />
  )
}
