import React from 'react'
import { StyleSheet, View } from 'react-native'
import { Card, Paragraph } from 'react-native-paper'

import VerseChipsRow from './VerseChipsRow'

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
        <VerseChipsRow
          verses={declaration.verses}
          showVerse={showVerse}
        />
      </Card.Content>
    </Card>
  )
}

const styles = StyleSheet.create({
  declaration: {
    marginBottom: 8,
  },
})
