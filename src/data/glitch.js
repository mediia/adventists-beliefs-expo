import { gql } from '@apollo/client';

const HOME = gql`
  query {
    doctrines {
      _id
      order
      title
      beliefs {
        _id
        order
        title
      }
    }
  }
`

const BELIEF = gql`
  query($_id: ID!) {
    belief(_id: $_id) {
      _id
      order
      title
      declarations {
        _id
        order
        text
        verses {
          _id
          reference
        }
      }
    }
  }
`

export default {
    HOME,
    BELIEF
}
