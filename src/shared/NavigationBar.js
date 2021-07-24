import React from 'react'
import { Appbar } from 'react-native-paper'

export default function NavigationBar({ navigation, previous, scene }) {

  return (
    <Appbar.Header>
      {previous ? <Appbar.BackAction onPress={navigation.goBack} /> : null}
      <Appbar.Content title={scene.descriptor.options.title} />
    </Appbar.Header>
  );
}
