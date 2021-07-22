import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

import DoctrineTitle from './DoctrineTitle'
import Belief from './Belief'

export default function Doctrine({doctrine}) {

  return (
    <View key={doctrine._id} style={styles.doctrineContainer}>

      <DoctrineTitle doctrine={doctrine}/>

      {doctrine.beliefs && doctrine.beliefs.map(belief => (

        <Belief
          key={belief._id}
          belief={belief}
        />

      ))}
    </View>
  )
}

const styles = StyleSheet.create({
  doctrineContainer: {
    marginBottom: 10,
  },
})
