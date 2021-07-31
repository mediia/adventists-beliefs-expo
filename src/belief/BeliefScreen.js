import React from 'react';
import { ScrollView, Text, View, StyleSheet } from 'react-native';
import { Portal, Dialog, Paragraph } from 'react-native-paper'

import useData from '../data/useData'
import RootSurface from '../shared/RootSurface'

import BeliefScreenLoading from './BeliefScreenLoading'
import BeliefImage from './BeliefImage'
import Declaration from './Declaration'
import VerseDialog from './VerseDialog';

export default function BeliefScreen({ theme, route }) {

  const { belief } = route.params

  const { loading, error, data } = useData('BELIEF', { _id: belief._id })
  
  const [verse, setVerse] = React.useState(null)

  const showVerse = verse => setVerse(verse)

  const hideVerse = () => setVerse(null)

  if (loading) return <BeliefScreenLoading/>

  return (
    <RootSurface>
      <ScrollView>
        {error && <Text>Error! ${error.message}</Text>}

        {!loading && !error && data.belief && (

          <View>
            <BeliefImage belief={data.belief}/>
            <View style={styles.declarationsContainer}>

              {data.belief.declarations && data.belief.declarations.map(declaration => (
                <Declaration
                  key={declaration._id}
                  declaration={declaration}
                  showVerse={showVerse}
                />
              ))}

            </View>
          </View>
        )}
      </ScrollView>
      <Portal>
        <VerseDialog verse={verse} hideVerse={hideVerse} />
      </Portal>
    </RootSurface>
  );
}

const styles = StyleSheet.create({
  declarationsContainer: {
    padding: 8,
  }
})
