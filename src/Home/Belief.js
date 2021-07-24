import React from 'react'
import { List } from 'react-native-paper'


export default function Belief({ belief }) {

  return (
    <List.Item title={belief.title} />
  )
}
