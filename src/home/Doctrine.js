import React from 'react'
import { List } from 'react-native-paper'

import Belief from './Belief'

export default function Doctrine({ doctrine }) {

  return (
    <List.Section>
      <List.Subheader>{doctrine.title.toUpperCase()}</List.Subheader>

      {doctrine.beliefs && doctrine.beliefs.map(belief => (

        <Belief
          key={belief._id}
          belief={belief}
        />

      ))}

    </List.Section>
  )
}
