import React from 'react'
import { ScrollView, StatusBar, StyleSheet, Text, View } from 'react-native'
import { Surface } from 'react-native-paper'

import useData from '../data/useData'

import Doctrine from './Doctrine'

export default function Home() {

  const { loading, error, data } = useData('HOME');

  return (

    <Surface style={styles.container}>
      <ScrollView>

        {loading && <Text>Loading...</Text>}
        {error && <Text>Error! ${error.message}</Text>}

        {!loading && data.doctrines.map(doctrine => (

          <Doctrine
            key={doctrine._id}
            doctrine={doctrine}
          />

        ))}

      </ScrollView>
      <StatusBar style="auto" />
    </Surface>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
})
