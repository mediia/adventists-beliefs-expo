import React from 'react'
import { ScrollView, Dimensions, StyleSheet } from 'react-native'

import RootSurface from '../shared/RootSurface'
import DoctrineLoading from './DoctrineLoading'
import BeliefLoading from './BeliefLoading'

export default function HomeLoadingScreen() {

  return (
    <RootSurface>
      <ScrollView style={styles.container}>
        <DoctrineLoading>
          <BeliefLoading />
          <BeliefLoading />
          <BeliefLoading />
          <BeliefLoading />
          <BeliefLoading />
        </DoctrineLoading>
        <DoctrineLoading>
          <BeliefLoading />
          <BeliefLoading />
        </DoctrineLoading>
        <DoctrineLoading>
          <BeliefLoading />
          <BeliefLoading />
          <BeliefLoading />
        </DoctrineLoading>
        <DoctrineLoading>
          <BeliefLoading />
          <BeliefLoading />
          <BeliefLoading />
          <BeliefLoading />
          <BeliefLoading />
          <BeliefLoading />
          <BeliefLoading />
          <BeliefLoading />
        </DoctrineLoading>
        <DoctrineLoading>
          <BeliefLoading />
          <BeliefLoading />
          <BeliefLoading />
          <BeliefLoading />
          <BeliefLoading />
        </DoctrineLoading>
        <DoctrineLoading>
          <BeliefLoading />
          <BeliefLoading />
          <BeliefLoading />
          <BeliefLoading />
          <BeliefLoading />
        </DoctrineLoading>
      </ScrollView>
    </RootSurface>
  )
}

const styles = StyleSheet.create({
  container: {
    width: Dimensions.get('window').width
  }
})
