import React from 'react';
import { ScrollView, StatusBar, Text, View, StyleSheet } from 'react-native';
import { Surface } from 'react-native-paper'

import useData from '../data/useData'

import BeliefImage from './BeliefImage'
import Declaration from './Declaration'

export default function BeliefScreen({ route }) {

  const { belief } = route.params

  const { loading, error, data } = useData('BELIEF', { _id: belief._id })

  return (
    <Surface style={styles.container}>
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
      <StatusBar style="auto" />
    </Surface>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  declarationsContainer: {
    padding: 8,
  }
})
