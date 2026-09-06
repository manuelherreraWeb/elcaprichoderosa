import Image from 'next/image'
import { SectionHeading } from './section-heading'
import { Castle, Church, Droplets, Landmark } from 'lucide-react'

const lugares = [
  {
    icon: Castle,
    title: 'Castillo medieval',
    text: 'Corona el pueblo desde lo alto de la peña, con vistas espectaculares de todo el valle.',
  },
  {
    icon: Church,
    title: 'Iglesia de San Blas y su retablo',
    text: 'Una joya con un espléndido retablo gótico considerado uno de los más bellos de Aragón.',
  },
  {
    icon: Droplets,
    title: 'El Aguallueve',
    text: 'Un manantial y su lago donde el agua brota de la roca formando un rincón mágico entre la vegetación.',
  },
  {
    icon: Landmark,
    title: 'Torreón celtíbero',
    text: 'Vestigios de los primeros pobladores que habitaron este valle hace más de dos mil años.',
  },
]

export function Entorno() {
  return (
    <section id="entorno" className="scroll-mt-20 bg-background py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <div>
            <SectionHeading
              eyebrow="Qué ver en Anento"
              title="Uno de los pueblos más bonitos de España"
              description="Anento es un rincón medieval escondido en un valle del Campo de Daroca, en Zaragoza. Callejuelas de piedra, un castillo sobre la peña y parajes naturales de agua y verdor que enamoran en cualquier época del año."
            />
            <ul className="mt-8 grid gap-5 sm:grid-cols-2">
              {lugares.map((lugar) => (
                <li key={lugar.title} className="flex gap-4">
                  <span className="flex size-11 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                    <lugar.icon className="size-5" />
                  </span>
                  <div>
                    <h3 className="font-serif text-base font-semibold text-foreground">
                      {lugar.title}
                    </h3>
                    <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                      {lugar.text}
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          <div className="grid gap-4">
            <div className="relative aspect-16/11 overflow-hidden rounded-2xl">
              <Image
                src="/images/anento-pueblo-castillo.png"
                alt="Vista panorámica de Anento con su castillo medieval sobre el valle"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
            <div className="relative aspect-16/9 overflow-hidden rounded-2xl">
              <Image
                src="/images/aguallueve-manantial.png"
                alt="El Aguallueve de Anento, un manantial que brota de la roca entre vegetación"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
