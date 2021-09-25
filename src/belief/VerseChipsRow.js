import React from 'react'
import { StyleSheet } from 'react-native'
import { Paragraph } from 'react-native-paper'

import VerseChip from './VerseChip'

export default function VerseChipsRow({ verses, showVerse }) {

  return verses && !!verses.length && (
    <Paragraph
      style={styles.versesContainer}
    >
      {verses.map(verse => (
        <VerseChip
          key={verse._id}
          verse={verse}
          onPress={showVerse}
        />
      ))}
    </Paragraph>
  )
}

const styles = StyleSheet.create({
  versesContainer: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginTop: 8,
  },
})
