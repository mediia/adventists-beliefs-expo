import React from 'react'
import { StyleSheet } from 'react-native'
import { Image } from 'react-native'

export default function BeliefImage({belief}) {

  return (
    <Image
      source={{ uri: belief.image }}
      style={styles.image}
    />
  )
}

const styles = StyleSheet.create({
  image: {
    height: 29,
    width: 29 * 15 / 8,
    borderRadius: 2,
  },
})
