import Image from 'next/image'
import { SectionHeading } from './section-heading'

const fotos = [
  {
    src: '/images/exterior-casa-cueva.png',
    alt: 'Fachada exterior de la casa cueva con jardín',
    span: 'sm:col-span-2 sm:row-span-2',
  },
  {
    src: '/images/jardin.png',
    alt: 'Jardín privado con terraza y vistas al valle',
    span: '',
  },
  {
    src: '/images/salon.png',
    alt: 'Salón con techos de piedra',
    span: '',
  },
  {
    src: '/images/dormitorio-matrimonio.png',
    alt: 'Habitación de matrimonio',
    span: '',
  },
  {
    src: '/images/cocina.png',
    alt: 'Cocina equipada rústica',
    span: '',
  },
]

export function Galeria() {
  return (
    <section id="galeria" className="scroll-mt-20 bg-secondary/50 py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <SectionHeading
          eyebrow="Galería"
          title="Un vistazo a tu próxima escapada"
          align="center"
        />

        <div className="mt-12 grid auto-rows-[200px] grid-cols-2 gap-4 sm:grid-cols-4 md:auto-rows-[240px]">
          {fotos.map((foto) => (
            <div
              key={foto.src}
              className={`relative overflow-hidden rounded-2xl ${foto.span}`}
            >
              <Image
                src={foto.src || '/placeholder.svg'}
                alt={foto.alt}
                fill
                sizes="(max-width: 640px) 50vw, 25vw"
                className="object-cover transition-transform duration-500 hover:scale-105"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
