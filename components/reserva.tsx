import Image from 'next/image'
import { Phone } from 'lucide-react'
import { WhatsAppIcon } from './whatsapp-icon'
import { InstagramIcon } from './instagram-icon'

const CONTACT_PHONE = '675 561 710'
const CONTACT_PHONE_TEL = '+34675561710'
const WHATSAPP = '34675561710'
const INSTAGRAM_URL = 'https://www.instagram.com/elcaprichoderosa'
const WHATSAPP_MESSAGE = encodeURIComponent(
  'Hola, me gustaría consultar disponibilidad en El Capricho de Rosa.',
)

export function Reserva() {
  return (
    <section
      id="reserva"
      className="scroll-mt-20 bg-primary text-primary-foreground"
    >
      <div className="mx-auto grid max-w-6xl gap-0 lg:grid-cols-2">
        <div className="relative hidden min-h-[520px] lg:block">
          <Image
            src="/images/jardin.png"
            alt="Jardín privado de la casa cueva El Capricho de Rosa al atardecer"
            fill
            sizes="50vw"
            className="object-cover"
          />
        </div>

        <div className="px-4 py-16 md:px-10 md:py-20">
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.28em] text-primary-foreground/70">
            Reserva tu estancia
          </p>
          <h2 className="text-balance font-serif text-3xl font-semibold leading-tight md:text-4xl">
            ¿Preparamos tu escapada a Anento?
          </h2>
          <p className="mt-4 max-w-md text-pretty leading-relaxed text-primary-foreground/80">
            Escríbenos por WhatsApp o llámanos y te confirmamos disponibilidad y
            precios al instante. Estaremos encantados de ayudarte a organizar tu
            estancia.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <a
              href={`https://wa.me/${WHATSAPP}?text=${WHATSAPP_MESSAGE}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-accent px-7 py-3.5 text-sm font-semibold text-accent-foreground transition-transform hover:scale-[1.03]"
            >
              <WhatsAppIcon className="size-5" /> Reservar por WhatsApp
            </a>
            <a
              href={`tel:${CONTACT_PHONE_TEL}`}
              className="inline-flex items-center justify-center gap-2 rounded-full border border-primary-foreground/40 px-7 py-3.5 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary-foreground/10"
            >
              <Phone className="size-4" /> Llamar {CONTACT_PHONE}
            </a>
          </div>

          <div className="mt-8 flex flex-col gap-4 border-t border-primary-foreground/20 pt-6 text-sm">
            <a
              href={`tel:${CONTACT_PHONE_TEL}`}
              className="flex items-center gap-3 text-primary-foreground/90 transition-colors hover:text-primary-foreground"
            >
              <Phone className="size-4 shrink-0" />
              <span>{CONTACT_PHONE}</span>
            </a>
            <a
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 text-primary-foreground/90 transition-colors hover:text-primary-foreground"
            >
              <InstagramIcon className="size-4 shrink-0" />
              <span>@elcaprichoderosa</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
