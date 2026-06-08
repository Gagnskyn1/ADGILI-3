import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: 'https://adgilze.ge',
      lastModified: new Date(),
    },
  ]
}