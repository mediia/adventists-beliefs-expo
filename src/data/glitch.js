import { gql } from '@apollo/client';

const HOME = gql`
  query {
    doctrines {
      _id
      title
      beliefs {
        _id
        title
      }
    }
  }
`

export default {
    HOME
}
