import React from 'react'
import { StatusBar, StyleSheet, Text, View } from 'react-native'
import { Surface, Button } from 'react-native-paper'

import useData from '../data/useData'

import Doctrine from './Doctrine'

export default function Home({navigation}) {

  const { loading, error, data } = useData('HOME');

  return (

    <Surface style={styles.container}>

      {loading && <Text>Loading...</Text>}
      {error && <Text>Error! ${error.message}</Text>}

      {!loading && data.doctrines.map(doctrine => (

        <Doctrine
          key={doctrine._id}
          doctrine={doctrine}
        />

      ))}

      <StatusBar style="auto" />
    </Surface>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
})
