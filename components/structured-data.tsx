export function StructuredData() {
  const data = {
    '@context': 'https://schema.org',
    '@type': 'LodgingBusiness',
    name: 'El Capricho de Rosa',
    description:
      'Casa cueva de turismo rural en Anento (Zaragoza) con jardín privado, dos habitaciones y capacidad para hasta 6 personas.',
    url: 'https://elcaprichoderosa.com',
    image: 'https://elcaprichoderosa.com/images/exterior-casa-cueva.png',
    petsAllowed: true,
    numberOfRooms: 2,
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Anento',
      addressRegion: 'Zaragoza',
      postalCode: '50313',
      addressCountry: 'ES',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 41.18,
      longitude: -1.295,
    },
    amenityFeature: [
      { '@type': 'LocationFeatureSpecification', name: 'Jardín privado', value: true },
      { '@type': 'LocationFeatureSpecification', name: 'WiFi', value: true },
      { '@type': 'LocationFeatureSpecification', name: 'Cocina equipada', value: true },
    ],
  }

  return (
    <script
      type="application/ld+json"
      // eslint-disable-next-line react/no-danger
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  )
}
