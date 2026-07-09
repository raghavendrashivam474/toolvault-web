import { SITE } from '@/constants'

/**
 * JSON-LD structured data for search engines.
 * Renders an Organization schema to improve search result presentation.
 */
export function JsonLd() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: SITE.name,
    description: SITE.description,
    url: SITE.url,
    email: SITE.email,
    logo: `${SITE.url}/icon.svg`,
    sameAs: [],
    foundingDate: '2024',
    slogan: 'Engineering Infrastructure for Innovators',
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}
