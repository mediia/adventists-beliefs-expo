import React from 'react'
import { Dimensions, StyleSheet } from 'react-native'

import LoadingPulse from '../shared/LoadingPulse'

export default function BeliefImageLoading() {

  return <LoadingPulse style={styles.image} />
}

const width = Dimensions.get('window').width

const styles = {
  image: {
    width,
    height: width * 8 / 15,
  }
}
