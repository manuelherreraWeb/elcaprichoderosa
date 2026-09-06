import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { Fraunces, Mulish } from 'next/font/google'
import './globals.css'

const fraunces = Fraunces({
  subsets: ['latin'],
  variable: '--font-fraunces',
  display: 'swap',
})

const mulish = Mulish({
  subsets: ['latin'],
  variable: '--font-mulish',
  display: 'swap',
})

const SITE_URL = 'https://elcaprichoderosa.com'

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default:
      'El Capricho de Rosa | Casa cueva rural en Anento, Zaragoza',
    template: '%s | El Capricho de Rosa',
  },
  description:
    'Casa cueva de turismo rural en Anento (Zaragoza) con jardín privado, 2 habitaciones y capacidad hasta 6 personas. Escapada de naturaleza junto al castillo medieval, el Aguallueve y el valle. Reserva tu estancia.',
  keywords: [
    'casa cueva Anento',
    'casa rural Anento',
    'turismo rural Zaragoza',
    'alojamiento rural Anento',
    'casa rural con jardín Aragón',
    'escapada rural Zaragoza',
    'casa cueva rural',
    'El Capricho de Rosa',
    'Aguallueve Anento',
    'castillo de Anento',
    'qué ver en Anento',
    'casa rural Campo de Daroca',
  ],
  authors: [{ name: 'El Capricho de Rosa' }],
  generator: 'v0.app',
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'es_ES',
    url: SITE_URL,
    siteName: 'El Capricho de Rosa',
    title: 'El Capricho de Rosa | Casa cueva rural en Anento, Zaragoza',
    description:
      'Casa cueva con jardín privado en Anento, uno de los pueblos más bonitos de Zaragoza. Naturaleza, historia medieval y descanso a solo una hora de la ciudad.',
    images: [
      {
        url: '/images/exterior-casa-cueva.png',
        width: 1200,
        height: 630,
        alt: 'Exterior de la casa cueva El Capricho de Rosa en Anento',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'El Capricho de Rosa | Casa cueva rural en Anento, Zaragoza',
    description:
      'Casa cueva con jardín privado en Anento, Zaragoza. Naturaleza, historia y descanso.',
    images: ['/images/exterior-casa-cueva.png'],
  },
  robots: {
    index: true,
    follow: true,
  },
}

export const viewport: Viewport = {
  colorScheme: 'light',
  themeColor: '#3d5c3a',
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="es"
      className={`light ${fraunces.variable} ${mulish.variable}`}
    >
      <body className="font-sans antialiased bg-background">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
