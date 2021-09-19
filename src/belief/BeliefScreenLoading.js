import React from 'react';
import { ScrollView, View, StyleSheet } from 'react-native';

import RootSurface from '../shared/RootSurface'

import BeliefImageLoading from './BeliefImageLoading'
import DeclarationLoading from './DeclarationLoading'

export default function BeliefScreen() {

  return (
    <RootSurface>
      <ScrollView>
        <BeliefImageLoading/>
        <View style={styles.declarationsContainer}>
          <DeclarationLoading/>
          <DeclarationLoading/>
          <DeclarationLoading/>
          <DeclarationLoading/>
          <DeclarationLoading/>
        </View>
      </ScrollView>
    </RootSurface>
  );
}

const styles = StyleSheet.create({
  declarationsContainer: {
    padding: 8,
  }
})
