import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

import Belief from './Belief'

export default function Doctrine({doctrine}) {

  return (
    <View key={doctrine._id} style={styles.doctrineContainer}>
      <Text style={styles.doctrineTitle}>{doctrine.title}</Text>

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
  doctrineTitle: {
    fontWeight: 'bold',
  },
})
