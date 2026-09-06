import Image from 'next/image'
import { SectionHeading } from './section-heading'
import { Flame, Trees, Armchair, Dog, Sun, Sparkles } from 'lucide-react'

const caracteristicas = [
  { icon: Flame, label: 'Barbacoa de piedra' },
  { icon: Armchair, label: 'Mobiliario de jardín' },
  { icon: Trees, label: 'Zona verde privada' },
  { icon: Dog, label: 'Admite mascotas' },
  { icon: Sun, label: 'Terraza soleada' },
  { icon: Sparkles, label: 'Vistas al valle' },
]

export function Jardin() {
  return (
    <section id="jardin" className="scroll-mt-20 bg-secondary py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <SectionHeading
          eyebrow="El jardín"
          title="Un jardín privado con salida desde cada estancia"
          description="Todas las habitaciones de El Capricho de Rosa dan al jardín, un espacio exterior privado donde disfrutar del aire puro de la sierra de Anento. Enciende la barbacoa, relájate bajo la pérgola y deja que los niños y las mascotas campen a sus anchas mientras contemplas el valle."
        />

        <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-4 lg:grid-rows-2">
          <div className="relative aspect-4/3 overflow-hidden rounded-2xl lg:col-span-2 lg:row-span-2 lg:aspect-auto">
            <Image
              src="/images/jardin.png"
              alt="Jardín privado de la casa cueva El Capricho de Rosa con terraza y vistas al valle de Anento"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
            />
          </div>
          <div className="relative aspect-4/3 overflow-hidden rounded-2xl lg:col-span-2">
            <Image
              src="/images/jardin-barbacoa.png"
              alt="Barbacoa de piedra y mobiliario de jardín en el exterior de la casa cueva"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
            />
          </div>
          <div className="relative aspect-4/3 overflow-hidden rounded-2xl lg:col-span-2">
            <Image
              src="/images/jardin-rincon.png"
              alt="Rincón de descanso del jardín bajo una pérgola con vistas al atardecer"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
            />
          </div>
        </div>

        <ul className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
          {caracteristicas.map((item) => (
            <li
              key={item.label}
              className="flex flex-col items-center gap-3 rounded-2xl border border-border bg-card p-5 text-center"
            >
              <span className="flex size-11 items-center justify-center rounded-full bg-primary/10 text-primary">
                <item.icon className="size-5" />
              </span>
              <span className="text-sm font-medium leading-snug text-foreground">
                {item.label}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
