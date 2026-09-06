import { SiteHeader } from '@/components/site-header'
import { Hero } from '@/components/hero'
import { LaCasa } from '@/components/la-casa'
import { Estancias } from '@/components/estancias'
import { Jardin } from '@/components/jardin'
import { Entorno } from '@/components/entorno'
import { Galeria } from '@/components/galeria'
import { Ubicacion } from '@/components/ubicacion'
import { Reserva } from '@/components/reserva'
import { SiteFooter } from '@/components/site-footer'
import { StructuredData } from '@/components/structured-data'

export default function Page() {
  return (
    <>
      <StructuredData />
      <SiteHeader />
      <main>
        <Hero />
        <LaCasa />
        <Estancias />
        <Jardin />
        <Entorno />
        <Galeria />
        <Ubicacion />
        <Reserva />
      </main>
      <SiteFooter />
    </>
  )
}
