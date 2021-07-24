import React from 'react'
import { StatusBar, StyleSheet, Text, View } from 'react-native'

import useData from '../data/useData'

import Doctrine from './Doctrine'

export default function Home() {

  const { loading, error, data } = useData('HOME');

  return (

    <View style={styles.container}>

      {loading && <Text>Loading...</Text>}
      {error && <Text>Error! ${error.message}</Text>}

      {!loading && data.doctrines.map(doctrine => (

        <Doctrine
          key={doctrine._id}
          doctrine={doctrine}
        />

      ))}

      <StatusBar style="auto" />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    marginBottom: 10,
    fontSize: 30,
  },
  doctrineContainer: {
    marginBottom: 10,
  },
  doctrineTitle: {
    fontWeight: 'bold',
  },
})
