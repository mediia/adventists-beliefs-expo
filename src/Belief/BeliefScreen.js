import React from 'react';
import { ScrollView, Text, View, StyleSheet } from 'react-native';

import useData from '../data/useData'
import RootSurface from '../shared/RootSurface'

import BeliefImage from './BeliefImage'
import Declaration from './Declaration'

export default function BeliefScreen({ theme, route }) {

  const { belief } = route.params

  const { loading, error, data } = useData('BELIEF', { _id: belief._id })

  return (
    <RootSurface>
      <ScrollView>

        {loading && <Text>Loading...</Text>}
        {error && <Text>Error! ${error.message}</Text>}

        {!loading && !error && data.belief && (

          <View>

            <BeliefImage belief={data.belief}/>

            <View style={styles.declarationsContainer}>

              {data.belief.declarations && data.belief.declarations.map(declaration => (
                <Declaration
                  key={declaration._id}
                  declaration={declaration}
                />
              ))}

            </View>

          </View>
        )}
      </ScrollView>
    </RootSurface>
  );
}

const styles = StyleSheet.create({
  declarationsContainer: {
    padding: 8,
  }
})
