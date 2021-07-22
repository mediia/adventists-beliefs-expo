import React from 'react'
import { StyleSheet, Text } from 'react-native'


export default function DoctrineTitle({doctrine}) {

  return (
    <Text style={styles.doctrineTitle}>{doctrine.title}</Text>
  )
}

const styles = StyleSheet.create({
  doctrineTitle: {
    fontWeight: 'bold',
  },
})
  