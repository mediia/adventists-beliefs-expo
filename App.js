import React from 'react'
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import 'react-native-gesture-handler'
import { Provider as PaperProvider } from 'react-native-paper'

import HomeScreen from './src/Home/HomeScreen'

// Initialize Apollo Client
const client = new ApolloClient({
  uri: 'https://mediia-adventist-beliefs.glitch.me/',
  cache: new InMemoryCache()
})

// Initialize main Stack Navigator
const Stack = createStackNavigator()

export default function App() {

  return (
    <PaperProvider>
      <ApolloProvider client={client}>
        <NavigationContainer>
          <Stack.Navigator initialRouteName="Home">
            <Stack.Screen name="Adventists Beliefs"
              component={HomeScreen}
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
