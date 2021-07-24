import React from 'react'
import { List } from 'react-native-paper'

import LoadingPulse from '../shared/LoadingPulse'

export default function BeliefLoading() {

  return (
    <List.Item
      title={<LoadingPulse style={{ height: 18, }} />}
      left={() => <LoadingPulse style={{ height: 29, width: 29 * 15 / 8, }} />}
    />
  )
}
