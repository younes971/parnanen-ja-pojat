import { createClient } from 'next-sanity'

export const client = createClient({
  projectId: '9cnz6t2f',
  dataset: 'production',
  apiVersion: '2024-01-01',
  useCdn: false,
})