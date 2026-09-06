import Image from 'next/image'
import { SectionHeading } from './section-heading'

const estancias = [
  {
    img: '/images/dormitorio-matrimonio.png',
    alt: 'Dormitorio de matrimonio con cama de matrimonio y paredes de piedra encalada',
    title: 'Habitación de matrimonio',
    text: 'Un dormitorio cálido con cama de matrimonio, ropa de cama de calidad y el abrazo de los muros de piedra.',
    tag: 'Dormitorio',
  },
  {
    img: '/images/dormitorio-doble.png',
    alt: 'Dormitorio doble con dos camas individuales y decoración rústica',
    title: 'Habitación doble',
    text: 'Con dos camas individuales, perfecta para amigos o para los más pequeños de la casa.',
    tag: 'Dormitorio',
  },
  {
    img: '/images/cocina.png',
    alt: 'Cocina rústica totalmente equipada con encimera de madera',
    title: 'Cocina equipada',
    text: 'Todo lo necesario para preparar tus platos con productos de la tierra y comer sin prisas.',
    tag: 'Cocina',
  },
  {
    img: '/images/bano.png',
    alt: 'Baño completo con ducha y lavabo de piedra',
    title: 'Baño completo',
    text: 'Baño con ducha, acabados rústicos y todas las comodidades para tu estancia.',
    tag: 'Baño',
  },
]

export function Estancias() {
  return (
    <section id="estancias" className="scroll-mt-20 bg-secondary/50 py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <SectionHeading
          eyebrow="Estancias"
          title="Cada rincón, pensado para descansar"
          description="Dos habitaciones, un salón con dos sofás cama, cocina y baño. Espacio de sobra para hasta seis personas sin renunciar a la calidez del hogar."
        />

        <div className="mt-12 grid gap-6 sm:grid-cols-2">
          {estancias.map((room) => (
            <article
              key={room.title}
              className="group overflow-hidden rounded-2xl border border-border bg-card"
            >
              <div className="relative aspect-16/10 overflow-hidden">
                <Image
                  src={room.img || '/placeholder.svg'}
                  alt={room.alt}
                  fill
                  sizes="(max-width: 640px) 100vw, 50vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <span className="absolute left-4 top-4 rounded-full bg-background/90 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-primary">
                  {room.tag}
                </span>
              </div>
              <div className="p-6">
                <h3 className="font-serif text-xl font-semibold text-foreground">
                  {room.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {room.text}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
