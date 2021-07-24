import React from 'react'
import { List } from 'react-native-paper'

import BeliefImage from './BeliefImage'

export default function Belief({ belief }) {

  return (
    <List.Item
      title={belief.title}
      left={() => <BeliefImage belief={belief}/>}
    />
  )
}
