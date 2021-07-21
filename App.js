import React from 'react'
import { StatusBar, StyleSheet, Text, View } from 'react-native'
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';

// Initialize Apollo Client
const client = new ApolloClient({
  uri: 'localhost:4000/graphql',
  cache: new InMemoryCache()
});

export default function App () {

  return (
    <ApolloProvider client={client}>
      <View style={styles.container}>
        <Text>Adventist beliefs</Text>
        <StatusBar style="auto" />
      </View>
    </ApolloProvider>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
