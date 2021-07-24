import React from 'react'
import { useQuery } from '@apollo/client'

import queries from './queries'

export default function useData(query, variables) {

  return useQuery(queries[query], { variables })
}
