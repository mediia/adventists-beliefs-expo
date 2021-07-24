import React from 'react'
import { StyleSheet } from 'react-native'
import { Card, Paragraph } from 'react-native-paper'

export default function Declaration({declaration}) {

  return (
    <Card
      key={declaration._id}
      style={styles.declaration}
    >
      <Card.Content>
        <Paragraph>
          {declaration.text}
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
