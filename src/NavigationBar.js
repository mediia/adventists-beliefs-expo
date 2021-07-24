import React from 'react'
import { Appbar } from 'react-native-paper'

export default function NavigationBar(props) {
  console.log(props)
  const { navigation, previous, scene } = props

  return (
    <Appbar.Header>
      {previous ? <Appbar.BackAction onPress={navigation.goBack} /> : null}
      <Appbar.Content title={scene.descriptor.options.title} />
    </Appbar.Header>
  );
}
