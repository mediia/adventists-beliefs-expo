import React from 'react'
import { StyleSheet } from 'react-native'
import { Card, Paragraph } from 'react-native-paper'

import LoadingPulse from '../shared/LoadingPulse'

export default function DeclarationLoading() {

  return (
    <Card style={styles.declaration}>
      <Card.Content>
        <Paragraph>
          <LoadingPulse/>
          <LoadingPulse/>
        </Paragraph>
      </Card.Content>
    </Card>
  )
}

const styles = StyleSheet.create({
  declaration: {
    marginBottom: 8,
  }
})
