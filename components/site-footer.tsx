import { Phone } from 'lucide-react'
import { WhatsAppIcon } from './whatsapp-icon'
import { InstagramIcon } from './instagram-icon'

const CONTACT_PHONE = '675 561 710'
const CONTACT_PHONE_TEL = '+34675561710'
const WHATSAPP = '34675561710'
const INSTAGRAM_URL = 'https://www.instagram.com/elcaprichoderosa'

export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-background py-12">
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <div className="flex flex-col gap-8 md:flex-row md:items-start md:justify-between">
          <div className="max-w-sm">
            <p className="font-serif text-xl font-semibold text-primary">
              El Capricho de Rosa
            </p>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
              Casa cueva de turismo rural en Anento, Zaragoza. Tu refugio de
              naturaleza, historia y descanso en el corazón de Aragón.
            </p>
            <div className="mt-4 flex items-center gap-3">
              <a
                href={INSTAGRAM_URL}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram de El Capricho de Rosa"
                className="flex size-10 items-center justify-center rounded-full bg-secondary text-primary transition-colors hover:bg-primary hover:text-primary-foreground"
              >
                <InstagramIcon className="size-5" />
              </a>
              <a
                href={`https://wa.me/${WHATSAPP}`}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp de El Capricho de Rosa"
                className="flex size-10 items-center justify-center rounded-full bg-secondary text-primary transition-colors hover:bg-primary hover:text-primary-foreground"
              >
                <WhatsAppIcon className="size-5" />
              </a>
              <a
                href={`tel:${CONTACT_PHONE_TEL}`}
                aria-label="Llamar a El Capricho de Rosa"
                className="flex size-10 items-center justify-center rounded-full bg-secondary text-primary transition-colors hover:bg-primary hover:text-primary-foreground"
              >
                <Phone className="size-5" />
              </a>
            </div>
          </div>

          <nav className="flex flex-col gap-2 text-sm">
            <span className="font-semibold text-foreground">Explora</span>
            <a href="#la-casa" className="text-muted-foreground hover:text-primary">
              La casa
            </a>
            <a href="#estancias" className="text-muted-foreground hover:text-primary">
              Estancias
            </a>
            <a href="#jardin" className="text-muted-foreground hover:text-primary">
              Jardín
            </a>
            <a href="#entorno" className="text-muted-foreground hover:text-primary">
              El entorno
            </a>
            <a href="#reserva" className="text-muted-foreground hover:text-primary">
              Reservar
            </a>
          </nav>

          <div className="text-sm">
            <span className="font-semibold text-foreground">Contacto</span>
            <address className="mt-2 not-italic leading-relaxed text-muted-foreground">
              Calle la Marina, 12
              <br />
              50369 Anento · Zaragoza, Aragón
              <br />
              España
              <br />
              <a
                href={`tel:${CONTACT_PHONE_TEL}`}
                className="mt-2 inline-block hover:text-primary"
              >
                {CONTACT_PHONE}
              </a>
            </address>
          </div>
        </div>

        <div className="mt-10 border-t border-border pt-6 text-center text-xs text-muted-foreground">
          © {new Date().getFullYear()} El Capricho de Rosa · Casa cueva rural
          en Anento. Todos los derechos reservados.
        </div>
      </div>
    </footer>
  )
}
