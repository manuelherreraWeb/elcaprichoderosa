export function StructuredData() {
  const data = {
    '@context': 'https://schema.org',
    '@type': 'LodgingBusiness',
    name: 'El Capricho de Rosa',
    description:
      'Casa cueva de turismo rural en Anento (Zaragoza) con jardín privado, dos habitaciones y capacidad para hasta 6 personas.',
    url: 'https://elcaprichoderosa.com',
    image: 'https://elcaprichoderosa.com/images/exterior-casa-cueva.png',
    telephone: '+34675561710',
    petsAllowed: true,
    numberOfRooms: 2,
    sameAs: ['https://www.instagram.com/elcaprichoderosa'],
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Calle la Marina, 12',
      addressLocality: 'Anento',
      addressRegion: 'Zaragoza',
      postalCode: '50369',
      addressCountry: 'ES',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 41.18,
      longitude: -1.295,
    },
    amenityFeature: [
      { '@type': 'LocationFeatureSpecification', name: 'Jardín privado', value: true },
      { '@type': 'LocationFeatureSpecification', name: 'Barbacoa', value: true },
      { '@type': 'LocationFeatureSpecification', name: 'WiFi', value: true },
      { '@type': 'LocationFeatureSpecification', name: 'Cocina equipada', value: true },
      { '@type': 'LocationFeatureSpecification', name: 'Calefacción', value: true },
      { '@type': 'LocationFeatureSpecification', name: 'Aire acondicionado', value: true },
      { '@type': 'LocationFeatureSpecification', name: 'Chimenea', value: true },
      { '@type': 'LocationFeatureSpecification', name: 'Ducha de hidromasaje', value: true },
      { '@type': 'LocationFeatureSpecification', name: 'Admite mascotas', value: true },
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
