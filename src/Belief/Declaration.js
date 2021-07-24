import React from 'react'
import { Card, Paragraph } from 'react-native-paper'

export default function Declaration({declaration}) {

  return (
    <Card
      key={declaration._id}
    >
      <Card.Content>
        <Paragraph>
          {declaration.text}
        </Paragraph>
      </Card.Content>
    </Card>
  )
}
