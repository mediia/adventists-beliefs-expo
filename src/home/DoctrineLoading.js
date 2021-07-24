import React from 'react'
import { List } from 'react-native-paper'

import LoadingPulse from '../shared/LoadingPulse'

export default function DoctrineLoading({ children }) {

  return (
    <List.Section>
      
      <List.Subheader>
        <LoadingPulse style={{ height: 17 }} />
      </List.Subheader>

      {children}

    </List.Section>
  )
}
