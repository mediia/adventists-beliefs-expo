import React from 'react'
import { Dimensions, Image, StyleSheet } from 'react-native'

export default function BeliefImage({belief}) {

  return <Image style={styles.image} source={{ uri: belief.image }} />
}

const width = Dimensions.get('window').width

const styles = StyleSheet.create({
  image: {
    width,
    height: width * 8 / 15,
  }
})
