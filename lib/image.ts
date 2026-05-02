import imageUrlBuilder from '@sanity/image-url'
import { client } from '../sanity'
import type { Image } from 'sanity'

const builder = imageUrlBuilder(client)

export function urlFor(source: Image) {
  return builder.image(source)
}