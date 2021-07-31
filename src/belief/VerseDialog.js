import React from 'react'
import { Dialog, Paragraph } from 'react-native-paper'

export default function VerseDialog({ verse, hideVerse }) {

  return (
    <Dialog visible={!!verse} onDismiss={hideVerse}>
      <Dialog.Title>{verse && verse.title}</Dialog.Title>
      <Dialog.Content>
        <Paragraph>{verse && verse.text}</Paragraph>
      </Dialog.Content>
    </Dialog>
  )
}
