import React from 'react'
import { StyleSheet, View } from 'react-native'
import { Card, Paragraph } from 'react-native-paper'

import VerseChip from './VerseChip'

export default function Declaration({ declaration, showVerse }) {

  return (
    <Card
      key={declaration._id}
      style={styles.declaration}
    >
      <Card.Content>
        <Paragraph>
          {declaration.text}
        </Paragraph>
        {declaration.verses && !!declaration.verses.length &&
          <Paragraph
            style={styles.versesContainer}
          >
            {declaration.verses && declaration.verses.map(verse => (
              <VerseChip
                key={verse._id}
                verse={verse}
                onPress={showVerse}
              />
            ))}
          </Paragraph>
        }
      </Card.Content>
    </Card>
  )
}

const styles = StyleSheet.create({
  declaration: {
    marginBottom: 8,
  },
  versesContainer: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginTop: 8,
  },
})
