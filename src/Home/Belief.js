import React from 'react'
import { StyleSheet, Text, View } from 'react-native'


export default function Belief({belief}) {

  return (
    <Text key={belief._id}>- {belief.title}</Text>
  )
}
