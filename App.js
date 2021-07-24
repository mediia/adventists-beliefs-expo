import React from 'react'
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import 'react-native-gesture-handler'
import { Provider as PaperProvider } from 'react-native-paper'

import NavigationBar from './src/NavigationBar'
import HomeScreen from './src/Home/HomeScreen'
import BeliefScreen from './src/Belief/BeliefScreen'

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
          <Stack.Navigator
            initialRouteName="Home"
            screenOptions={{
              header: (props) => <NavigationBar {...props} />
            }}
          >
            <Stack.Screen name="Home"
              component={HomeScreen}
              options={{ title: 'Adventist Beliefs' }}
            />
            <Stack.Screen name="Belief"
              component={BeliefScreen}
              options={({ route }) => ({ title: route.params.belief.title })}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </ApolloProvider>
    </PaperProvider>
  )
}
