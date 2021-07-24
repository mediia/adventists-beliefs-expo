import React from 'react'
import { Dimensions, Image } from 'react-native'

const width = Dimensions.get('window').width


export default function BeliefImage({belief}) {

  return (
    <Image
      style={{
        width,
        height: width * 8 / 15,
      }}
      source={{
        uri: belief.image
      }}
    />
  )
}
