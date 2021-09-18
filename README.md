# adventists-beliefs-expo

An expo app for Adventists Beliefs

# Running:

1. Install expo cli
2. Clone repository
3. `npm install`
4. `expo start`

# Architecture

- UI is built in react native, using expo.
    - UI components: [react-native-paper|https://callstack.github.io/react-native-paper/]
    - Navigation: [react-navigation|https://reactnavigation.org]
- Backend is a node GraphQL Apollo server connected to a mongodb.
    - Node GraphQL Apollo server hosted in [Glitch|http://glitch.com]
    - mongoDB hosted in [Atlas|http://cloud.mongodb.com]

# Data

Milestone 1.0
- Initial data will be sourced from https://www.adventist.org/beliefs/.

Milestone 2.0
Additional data to be defined. Can be:
- Extended descriptions and explanations from the book [Seventh-day Adventists Believe: A Biblical Exposition of 27 Fundamental Doctrines|https://g.co/kgs/KvVkSx] or other updated official source.

Milestone 3.0
- Hierarchical reorganization.
- Hymnals associated to each belief.
- Short video summaries.
- Extended video explanations and tutorials.
