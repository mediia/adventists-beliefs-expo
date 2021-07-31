import React from 'react'
import { StyleSheet } from 'react-native'
import { Chip } from 'react-native-paper'

export default function VerseChip({ verse, onPress }) {

  return (
    <Chip
      key={verse._id}
      style={styles.verseChip}
      onPress={() => onPress(verse)}
    >
      {verse.title}
    </Chip>
  )
}

const styles = StyleSheet.create({
  verseChip: {
    marginRight: 4,
  },
})
