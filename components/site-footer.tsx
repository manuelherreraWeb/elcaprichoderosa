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
          </div>

          <nav className="flex flex-col gap-2 text-sm">
            <span className="font-semibold text-foreground">Explora</span>
            <a href="#la-casa" className="text-muted-foreground hover:text-primary">
              La casa
            </a>
            <a href="#estancias" className="text-muted-foreground hover:text-primary">
              Estancias
            </a>
            <a href="#entorno" className="text-muted-foreground hover:text-primary">
              El entorno
            </a>
            <a href="#reserva" className="text-muted-foreground hover:text-primary">
              Reservar
            </a>
          </nav>

          <div className="text-sm">
            <span className="font-semibold text-foreground">Ubicación</span>
            <address className="mt-2 not-italic leading-relaxed text-muted-foreground">
              Anento
              <br />
              50313 · Zaragoza, Aragón
              <br />
              España
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
