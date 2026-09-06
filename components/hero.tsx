import Image from 'next/image'
import { BedDouble, Users, Trees, MapPin } from 'lucide-react'

const facts = [
  { icon: BedDouble, label: '2 habitaciones' },
  { icon: Users, label: 'Hasta 6 personas' },
  { icon: Trees, label: 'Jardín privado' },
  { icon: MapPin, label: 'Anento, Zaragoza' },
]

export function Hero() {
  return (
    <section id="inicio" className="relative isolate min-h-screen">
      <Image
        src="/images/exterior-casa-cueva.png"
        alt="Exterior de la casa cueva El Capricho de Rosa con su jardín en el valle de Anento"
        fill
        priority
        sizes="100vw"
        className="object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/25 to-black/70" />

      <div className="relative mx-auto flex min-h-screen max-w-6xl flex-col justify-end px-4 pb-14 pt-28 md:px-6 md:pb-20">
        <p className="mb-4 text-sm font-semibold uppercase tracking-[0.28em] text-white/85">
          Turismo rural en Anento
        </p>
        <h1 className="max-w-3xl text-balance font-serif text-4xl font-semibold leading-[1.05] text-white md:text-6xl lg:text-7xl">
          El Capricho de Rosa
        </h1>
        <p className="mt-5 max-w-xl text-pretty text-base leading-relaxed text-white/90 md:text-lg">
          Una casa cueva con jardín privado excavada en la montaña, en uno de
          los pueblos más bonitos de Zaragoza. Naturaleza, historia medieval y
          descanso a solo una hora de la ciudad.
        </p>

        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <a
            href="#reserva"
            className="rounded-full bg-accent px-7 py-3 text-center text-sm font-semibold text-accent-foreground transition-transform hover:scale-[1.03]"
          >
            Consultar disponibilidad
          </a>
          <a
            href="#la-casa"
            className="rounded-full border border-white/60 px-7 py-3 text-center text-sm font-semibold text-white backdrop-blur-sm transition-colors hover:bg-white/10"
          >
            Descubre la casa
          </a>
        </div>

        <ul className="mt-12 grid grid-cols-2 gap-4 border-t border-white/20 pt-8 sm:grid-cols-4">
          {facts.map((fact) => (
            <li key={fact.label} className="flex items-center gap-3 text-white">
              <fact.icon className="size-6 shrink-0 text-white/80" />
              <span className="text-sm font-medium leading-tight">
                {fact.label}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
