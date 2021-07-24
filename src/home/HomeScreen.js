import React from 'react'
import { ScrollView, Text } from 'react-native'

import useData from '../data/useData'
import RootSurface from '../shared/RootSurface'

import Doctrine from './Doctrine'

export default function Home() {

  const { loading, error, data } = useData('HOME')

  return (
    <RootSurface>
      <ScrollView>

        {loading && <Text>Loading...</Text>}
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
