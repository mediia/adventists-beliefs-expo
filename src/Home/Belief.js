import React from 'react'
import { List } from 'react-native-paper'
import { useNavigation } from '@react-navigation/native'

import BeliefImage from './BeliefImage'

export default function Belief({ belief }) {

  const navigation = useNavigation()

  return (
    <List.Item
      title={belief.title}
      left={() => <BeliefImage belief={belief}/>}
      onPress={() => navigation.navigate('Belief', { belief })}
    />
  )
}
