import React from 'react'
import { Dimensions, ScrollView, StyleSheet, Text } from 'react-native'

import useData from '../data/useData'
import RootSurface from '../shared/RootSurface'

import Doctrine from './Doctrine'
import HomeScreenLoading from './HomeScreenLoading'

const width = Dimensions.get('window').width

export default function Home() {

  const { loading, error, data } = useData('HOME')

  if (loading) return <HomeScreenLoading/>

  return (
    <RootSurface>
      <ScrollView style={styles.container}>

        {error && <Text>Error! ${error.message}</Text>}

        {!loading && !error && data.doctrines.map(doctrine => (

          <Doctrine
            key={doctrine._id}
            doctrine={doctrine}
          />

        ))}

      </ScrollView>
    </RootSurface>
  )
}

const styles = StyleSheet.create({
  container: {
    width
  }
})
