import Counter from "@/components/Counter";
import Reveal from "@/components/Reveal";

const nav = [
  ["Trayectoria", "#trayectoria"],
  ["Servicio público", "#servicio"],
  ["Libro", "#libro"],
  ["Contacto", "#contacto"],
];

const timeline = [
  { year: "2002", title: "Caracol Radio", text: "Reportera deportiva. Primer paso en los medios nacionales." },
  { year: "2004", title: "Telepacífico", text: "Presenta Nuestra Herencia, programa cultural del Pacífico colombiano. Gana el Premio Simón Bolívar de Periodismo en 2007." },
  { year: "2008", title: "Noticias Caracol", text: "Presentadora de noticias durante casi una década. Recibe varios Premios India Catalina como mejor presentadora." },
  { year: "2013", title: "Blu Radio", text: "Participa en Mañanas Blu y dirige Blanco y Negro y Vive Cali." },
  { year: "2017", title: "Noticias UNO", text: "Presenta el informativo hasta 2020 y vuelve a ganar el India Catalina." },
  { year: "2019", title: "Caracol Radio y podcast", text: "Integra 6AM Hoy por Hoy y luego lanza su propio podcast de noticias." },
];

const servicio = [
  { year: "2022", title: "Mesa de diálogo con el ELN", text: "Integra el equipo negociador del Gobierno nacional." },
  { year: "2024", title: "Secretaria de Turismo de Cali", text: "Lidera la preparación de la ciudad para la COP16, la Feria de Cali y el Petronio Álvarez." },
  { year: "2025", title: "Secretaria de Desarrollo Económico", text: "Emprendimiento, empleo, inversión y exportaciones de las empresas caleñas." },
  { year: "2026", title: "Proyectos estratégicos", text: "Iniciativas transversales y posicionamiento internacional de Cali. Cierra su ciclo el 23 de octubre y regresa al periodismo." },
];

const stats = [
  { n: 25000, suffix: "+", label: "visitantes internacionales en la COP16" },
  { n: 3000, suffix: "+", label: "emprendimientos fortalecidos" },
  { n: 1374, suffix: "", label: "personas vinculadas laboralmente" },
  { n: 80, suffix: "", label: "empresas con su primera exportación" },
];

const medios = ["Caracol Radio", "Telepacífico", "Noticias Caracol", "Blu Radio", "Noticias UNO", "Alcaldía de Cali"];

function Timeline({ items, color }: { items: typeof timeline; color: string }) {
  return (
    <ol className="relative ml-3 border-l-2 border-arena">
      {items.map((it, i) => (
        <li key={it.year + it.title} className="mb-10 ml-8">
          <Reveal delay={i * 0.05}>
            <span
              className="absolute -left-[9px] mt-2 h-4 w-4 rounded-full border-4 border-crema"
              style={{ background: color }}
            />
            <p className="font-serif text-sm font-semibold tracking-widest" style={{ color }}>
              {it.year}
            </p>
            <h3 className="mt-1 font-serif text-2xl">{it.title}</h3>
            <p className="mt-2 max-w-xl leading-relaxed text-tinta/75">{it.text}</p>
          </Reveal>
        </li>
      ))}
    </ol>
  );
}

export default function Home() {
  return (
    <>
      <div className="bg-ocre px-4 py-2 text-center text-sm font-medium text-tinta">
        Versión de borrador en revisión
      </div>

      <header className="sticky top-0 z-20 border-b border-arena/70 bg-crema/85 backdrop-blur">
        <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <a href="#inicio" className="font-serif text-xl font-semibold">
            Mábel Lara
          </a>
          <ul className="hidden gap-8 text-sm sm:flex">
            {nav.map(([label, href]) => (
              <li key={href}>
                <a href={href} className="transition-colors hover:text-terracota">
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </header>

      <main>
        <section id="inicio" className="relative overflow-hidden bg-tinta text-crema">
          <div aria-hidden className="pointer-events-none absolute -right-24 -top-24 h-96 w-96 rounded-full bg-ocre/20 blur-3xl" />
          <div aria-hidden className="pointer-events-none absolute -bottom-32 left-10 h-80 w-80 rounded-full bg-selva/40 blur-3xl" />
          <div className="relative mx-auto grid min-h-[80vh] max-w-6xl items-center gap-12 px-6 py-24 md:grid-cols-[1.4fr_1fr]">
            <div>
              <Reveal>
                <p className="text-sm uppercase tracking-[0.3em] text-ocre">Periodista · Puerto Tejada, Cauca</p>
              </Reveal>
              <Reveal delay={0.1}>
                <h1 className="mt-6 font-serif text-6xl font-semibold leading-[1.02] sm:text-8xl">
                  Mábel <span className="italic text-ocre">Lara</span>
                </h1>
              </Reveal>
              <Reveal delay={0.2}>
                <p className="mt-8 max-w-xl text-lg leading-relaxed text-crema/80">
                  Dos décadas contando el país en televisión y radio, y una etapa de servicio público en Cali.
                  Hoy vuelve a lo que mejor sabe hacer: preguntar, escuchar y contar.
                </p>
              </Reveal>
              <Reveal delay={0.3}>
                <div className="mt-10 flex flex-wrap gap-4">
                  <a href="#trayectoria" className="rounded-full bg-ocre px-7 py-3 font-medium text-tinta transition hover:bg-crema">
                    Ver trayectoria
                  </a>
                  <a href="#contacto" className="rounded-full border border-crema/40 px-7 py-3 transition hover:border-ocre hover:text-ocre">
                    Contacto
                  </a>
                </div>
              </Reveal>
            </div>
            <Reveal delay={0.25} className="hidden md:block">
              <div
                aria-hidden
                className="mx-auto flex aspect-[4/5] w-full max-w-sm items-center justify-center rounded-[2rem] border border-ocre/40 bg-gradient-to-br from-terracota/30 to-selva/30"
              >
                <span className="font-serif text-9xl italic text-ocre/80">ML</span>
              </div>
            </Reveal>
          </div>
        </section>

        <section aria-label="Medios" className="overflow-hidden border-y border-arena bg-arena/40 py-5">
          <div className="marquee-track flex w-max gap-14 whitespace-nowrap font-serif text-xl text-tinta/60">
            {[...medios, ...medios, ...medios, ...medios].map((m, i) => (
              <span key={i}>
                {m} <span className="ml-14 text-ocre">✦</span>
              </span>
            ))}
          </div>
        </section>

        <section id="trayectoria" className="mx-auto max-w-6xl px-6 py-28">
          <Reveal>
            <p className="text-sm uppercase tracking-[0.3em] text-terracota">Periodismo</p>
            <h2 className="mt-3 mb-14 font-serif text-5xl">Una voz en la pantalla y en el micrófono</h2>
          </Reveal>
          <Timeline items={timeline} color="var(--terracota)" />
        </section>

        <section id="servicio" className="bg-selva text-crema">
          <div className="mx-auto max-w-6xl px-6 py-28">
            <Reveal>
              <p className="text-sm uppercase tracking-[0.3em] text-ocre">Servicio público</p>
              <h2 className="mt-3 mb-14 font-serif text-5xl">Del micrófono a la gestión de ciudad</h2>
            </Reveal>
            <div className="grid gap-10 md:grid-cols-2">
              {servicio.map((s, i) => (
                <Reveal key={s.title} delay={i * 0.08}>
                  <div className="h-full rounded-2xl border border-crema/20 bg-tinta/20 p-8">
                    <p className="font-serif text-sm font-semibold tracking-widest text-ocre">{s.year}</p>
                    <h3 className="mt-2 font-serif text-2xl">{s.title}</h3>
                    <p className="mt-3 leading-relaxed text-crema/80">{s.text}</p>
                  </div>
                </Reveal>
              ))}
            </div>
            <dl className="mt-20 grid grid-cols-2 gap-10 md:grid-cols-4">
              {stats.map((s) => (
                <div key={s.label} className="flex flex-col-reverse">
                  <dt className="mt-2 text-sm text-crema/70">{s.label}</dt>
                  <dd className="font-serif text-5xl text-ocre">
                    <Counter to={s.n} suffix={s.suffix} />
                  </dd>
                </div>
              ))}
            </dl>
            <p className="mt-10 text-xs text-crema/60">Cifras reportadas por la Alcaldía de Cali.</p>
          </div>
        </section>

        <section id="libro" className="mx-auto grid max-w-6xl items-center gap-14 px-6 py-28 md:grid-cols-2">
          <Reveal>
            <div
              aria-hidden
              className="mx-auto flex aspect-[3/4] w-64 flex-col justify-between rounded-md bg-terracota p-8 text-crema shadow-2xl"
            >
              <span className="text-xs uppercase tracking-[0.3em] text-ocre">Mábel Lara</span>
              <span className="font-serif text-4xl italic leading-tight">Pelo libre, alma libre</span>
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="text-sm uppercase tracking-[0.3em] text-terracota">Libro · 2025</p>
            <h2 className="mt-3 font-serif text-5xl">Pelo libre, alma libre</h2>
            <p className="mt-6 max-w-lg leading-relaxed text-tinta/80">
              Su decisión de presentar las noticias con su cabello natural la llevó a revisar su propia vida y a
              investigar las historias de resistencia e identidad de personas afrodescendientes en Colombia y el
              mundo.
            </p>
            <a
              href="https://www.librerianacional.com/pelo-libre-alma-libre/p"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-block rounded-full bg-tinta px-7 py-3 text-crema transition hover:bg-terracota"
            >
              Conseguir el libro
            </a>
          </Reveal>
        </section>

        <section id="contacto" className="bg-tinta text-crema">
          <div className="mx-auto max-w-4xl px-6 py-28 text-center">
            <Reveal>
              <p className="text-sm uppercase tracking-[0.3em] text-ocre">Contacto</p>
              <h2 className="mt-3 font-serif text-5xl">Hablemos</h2>
              <p className="mx-auto mt-6 max-w-xl leading-relaxed text-crema/75">
                Para entrevistas, conferencias y proyectos, escríbele por sus redes. Pronto habrá un correo de
                contacto directo.
              </p>
              <div className="mt-10 flex flex-wrap justify-center gap-4">
                <a
                  href="https://x.com/MabelLaraNews"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-full bg-ocre px-7 py-3 font-medium text-tinta transition hover:bg-crema"
                >
                  X @MabelLaraNews
                </a>
                <a
                  href="https://www.instagram.com/mabellaranews/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-full border border-crema/40 px-7 py-3 transition hover:border-ocre hover:text-ocre"
                >
                  Instagram @mabellaranews
                </a>
              </div>
            </Reveal>
          </div>
        </section>
      </main>

      <footer className="bg-tinta py-8 text-center text-sm text-crema/50">
        © 2026 Mábel Lara · Sitio en construcción
      </footer>
    </>
  );
}
