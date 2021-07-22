import React from 'react'
import { StatusBar, StyleSheet, Text, View } from 'react-native'
import { useQuery, ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import 'react-native-gesture-handler'
import { Provider as PaperProvider } from 'react-native-paper'

import queries from './src/data/queries'

// Initialize Apollo Client
const client = new ApolloClient({
  uri: 'https://mediia-adventist-beliefs.glitch.me/',
  cache: new InMemoryCache()
})

// Initialize main Stack Navigator
const Stack = createStackNavigator()

function Home() {

  const { loading, error, data } = useQuery(queries.HOME)

  return (

    <View style={styles.container}>

      {loading && <Text>Loading...</Text>}
      {error && <Text>Error! ${error.message}</Text>}

      {!loading && data.doctrines.map(doctrine => (
        <View key={doctrine._id} style={styles.doctrineContainer}>
          <Text style={styles.doctrineTitle}>{doctrine.title}</Text>

          {doctrine.beliefs && doctrine.beliefs.map(belief => (

            <Text key={belief._id}>- {belief.title}</Text>

          ))}
        </View>
      ))}

      <StatusBar style="auto" />
    </View>
  )
}

export default function App() {

  return (
    <PaperProvider>
      <ApolloProvider client={client}>
        <NavigationContainer>
          <Stack.Navigator initialRouteName="Home">
            <Stack.Screen name="Adventists Beliefs"
              component={Home}
            />
            {/* <Stack.Screen name="Details"
              component={DetailsScreen}
              options={({ route }) => ({ title: route.params.belief.es })}
            /> */}
          </Stack.Navigator>
        </NavigationContainer>
      </ApolloProvider>
    </PaperProvider>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    marginBottom: 10,
    fontSize: 30,
  },
  doctrineContainer: {
    marginBottom: 10,
  },
  doctrineTitle: {
    fontWeight: 'bold',
  },
})
