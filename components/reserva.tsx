'use client'

import Image from 'next/image'
import { useState } from 'react'
import { Phone, Mail, MessageCircle } from 'lucide-react'

const CONTACT_EMAIL = 'reservas@elcaprichoderosa.com'
const CONTACT_PHONE = '+34 600 000 000'
const WHATSAPP = '34600000000'

export function Reserva() {
  const [form, setForm] = useState({
    nombre: '',
    fechas: '',
    personas: '2',
    mensaje: '',
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const subject = encodeURIComponent(
      'Consulta de disponibilidad · El Capricho de Rosa',
    )
    const body = encodeURIComponent(
      `Nombre: ${form.nombre}\nFechas: ${form.fechas}\nPersonas: ${form.personas}\n\n${form.mensaje}`,
    )
    window.location.href = `mailto:${CONTACT_EMAIL}?subject=${subject}&body=${body}`
  }

  return (
    <section id="reserva" className="scroll-mt-20 bg-primary text-primary-foreground">
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
            Cuéntanos las fechas y el número de personas y te confirmamos
            disponibilidad lo antes posible.
          </p>

          <form onSubmit={handleSubmit} className="mt-8 grid gap-4">
            <div className="grid gap-4 sm:grid-cols-2">
              <label className="grid gap-1.5 text-sm">
                <span className="font-medium">Nombre</span>
                <input
                  type="text"
                  required
                  value={form.nombre}
                  onChange={(e) => setForm({ ...form, nombre: e.target.value })}
                  className="rounded-lg border border-primary-foreground/25 bg-primary-foreground/10 px-3 py-2.5 text-primary-foreground placeholder:text-primary-foreground/50 focus:border-primary-foreground/60 focus:outline-none"
                  placeholder="Tu nombre"
                />
              </label>
              <label className="grid gap-1.5 text-sm">
                <span className="font-medium">Personas</span>
                <select
                  value={form.personas}
                  onChange={(e) =>
                    setForm({ ...form, personas: e.target.value })
                  }
                  className="rounded-lg border border-primary-foreground/25 bg-primary-foreground/10 px-3 py-2.5 text-primary-foreground focus:border-primary-foreground/60 focus:outline-none"
                >
                  {[1, 2, 3, 4, 5, 6].map((n) => (
                    <option key={n} value={n} className="text-foreground">
                      {n} {n === 1 ? 'persona' : 'personas'}
                    </option>
                  ))}
                </select>
              </label>
            </div>
            <label className="grid gap-1.5 text-sm">
              <span className="font-medium">Fechas deseadas</span>
              <input
                type="text"
                value={form.fechas}
                onChange={(e) => setForm({ ...form, fechas: e.target.value })}
                className="rounded-lg border border-primary-foreground/25 bg-primary-foreground/10 px-3 py-2.5 text-primary-foreground placeholder:text-primary-foreground/50 focus:border-primary-foreground/60 focus:outline-none"
                placeholder="Ej. del 12 al 15 de agosto"
              />
            </label>
            <label className="grid gap-1.5 text-sm">
              <span className="font-medium">Mensaje</span>
              <textarea
                rows={3}
                value={form.mensaje}
                onChange={(e) => setForm({ ...form, mensaje: e.target.value })}
                className="rounded-lg border border-primary-foreground/25 bg-primary-foreground/10 px-3 py-2.5 text-primary-foreground placeholder:text-primary-foreground/50 focus:border-primary-foreground/60 focus:outline-none"
                placeholder="Cuéntanos lo que necesites"
              />
            </label>
            <button
              type="submit"
              className="mt-1 rounded-full bg-accent px-6 py-3 text-sm font-semibold text-accent-foreground transition-transform hover:scale-[1.02]"
            >
              Enviar consulta
            </button>
          </form>

          <div className="mt-8 flex flex-col gap-3 border-t border-primary-foreground/20 pt-6 text-sm sm:flex-row sm:flex-wrap sm:gap-6">
            <a
              href={`tel:${CONTACT_PHONE.replace(/\s/g, '')}`}
              className="flex items-center gap-2 text-primary-foreground/90 transition-colors hover:text-primary-foreground"
            >
              <Phone className="size-4" /> {CONTACT_PHONE}
            </a>
            <a
              href={`mailto:${CONTACT_EMAIL}`}
              className="flex items-center gap-2 text-primary-foreground/90 transition-colors hover:text-primary-foreground"
            >
              <Mail className="size-4" /> {CONTACT_EMAIL}
            </a>
            <a
              href={`https://wa.me/${WHATSAPP}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-primary-foreground/90 transition-colors hover:text-primary-foreground"
            >
              <MessageCircle className="size-4" /> WhatsApp
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
