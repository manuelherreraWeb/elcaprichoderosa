import { SectionHeading } from './section-heading'
import { Car, Clock, Mountain, MapPin } from 'lucide-react'

const distancias = [
  { icon: Car, title: 'Zaragoza', text: 'A ~1 h en coche por la A-23' },
  { icon: Clock, title: 'Daroca', text: 'A tan solo 15 minutos' },
  { icon: Mountain, title: 'Altitud', text: 'Valle a 800 m, aire puro de sierra' },
]

export function Ubicacion() {
  return (
    <section id="ubicacion" className="scroll-mt-20 bg-background py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <SectionHeading
          eyebrow="Cómo llegar"
          title="En pleno casco urbano de Anento, Zaragoza"
          description="La casa se encuentra en Calle la Marina, 12 (50369 Anento, Zaragoza), en el casco urbano del pueblo, bien comunicado y a un paso de los principales atractivos de la comarca del Campo de Daroca."
        />

        <div className="mt-6 flex justify-center">
          <a
            href="https://maps.app.goo.gl/Zm3RZC6EzrCV7Pab8"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-transform hover:scale-[1.03]"
          >
            <MapPin className="size-4" /> Ver en Google Maps
          </a>
        </div>

        <div className="mt-10 grid gap-8 lg:grid-cols-2 lg:items-stretch">
          <div className="overflow-hidden rounded-2xl border border-border">
            <iframe
              title="Mapa de Anento, Zaragoza"
              src="https://www.openstreetmap.org/export/embed.html?bbox=-1.3300%2C41.1600%2C-1.2600%2C41.2000&layer=mapnik&marker=41.1800%2C-1.2950"
              className="h-80 w-full lg:h-full"
              loading="lazy"
            />
          </div>

          <div className="flex flex-col justify-center gap-4">
            {distancias.map((d) => (
              <div
                key={d.title}
                className="flex items-center gap-4 rounded-2xl border border-border bg-card p-5"
              >
                <span className="flex size-12 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                  <d.icon className="size-6" />
                </span>
                <div>
                  <p className="font-serif text-lg font-semibold text-foreground">
                    {d.title}
                  </p>
                  <p className="text-sm text-muted-foreground">{d.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
