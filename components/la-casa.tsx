import Image from 'next/image'
import { SectionHeading } from './section-heading'
import {
  Wifi,
  Flame,
  UtensilsCrossed,
  Bath,
  Sofa,
  ThermometerSun,
} from 'lucide-react'

const amenities = [
  { icon: Sofa, label: 'Salón con dos sofás cama' },
  { icon: UtensilsCrossed, label: 'Cocina totalmente equipada' },
  { icon: Bath, label: 'Baño completo' },
  { icon: ThermometerSun, label: 'Confort térmico todo el año' },
  { icon: Wifi, label: 'WiFi gratuito' },
  { icon: Flame, label: 'Ambiente acogedor y tranquilo' },
]

export function LaCasa() {
  return (
    <section id="la-casa" className="scroll-mt-20 bg-background py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div className="relative order-last aspect-4/3 overflow-hidden rounded-2xl lg:order-first">
            <Image
              src="/images/salon.png"
              alt="Salón acogedor de la casa cueva con techos de piedra y dos sofás"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
            />
          </div>

          <div>
            <SectionHeading
              eyebrow="La casa cueva"
              title="Vivir la montaña desde dentro"
              description="El Capricho de Rosa es una auténtica casa cueva excavada en la roca de la montaña de Anento. Sus muros de piedra mantienen una temperatura agradable durante todo el año y crean un refugio único donde el descanso está garantizado. Con capacidad para hasta 6 personas, es ideal para parejas, familias y grupos de amigos que buscan desconectar en plena naturaleza."
            />

            <ul className="mt-8 grid grid-cols-1 gap-x-6 gap-y-4 sm:grid-cols-2">
              {amenities.map((item) => (
                <li key={item.label} className="flex items-center gap-3">
                  <span className="flex size-10 shrink-0 items-center justify-center rounded-full bg-secondary text-primary">
                    <item.icon className="size-5" />
                  </span>
                  <span className="text-sm font-medium text-foreground">
                    {item.label}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
