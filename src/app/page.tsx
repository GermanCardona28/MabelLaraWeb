import Counter from "@/components/Counter";
import Reveal from "@/components/Reveal";

const nav = [
  ["Trayectoria", "#trayectoria"],
  ["Servicio público", "#servicio"],
  ["Su voz", "#voz"],
  ["Libro", "#libro"],
  ["Reconocimientos", "#reconocimientos"],
];

const hechos = [
  { dato: "2002", texto: "Inicia en los medios como reportera de Caracol Radio" },
  { dato: "2024", texto: "Asume la Secretaría de Turismo de Cali" },
  { dato: "2025", texto: "Publica su libro Pelo libre, alma libre" },
];

const periodismo = [
  { year: "2002", title: "Caracol Radio", text: "Reportera deportiva. Su primer trabajo en los medios nacionales." },
  { year: "2004", title: "Telepacífico", text: "Presenta Nuestra Herencia, programa cultural del Pacífico colombiano." },
  { year: "2008", title: "Noticias Caracol", text: "Presentadora de noticias durante casi una década, en emisiones de fin de semana, mediodía y primera edición." },
  { year: "2013", title: "Blu Radio", text: "Participa en Mañanas Blu y dirige los programas Blanco y Negro y Vive Cali." },
  { year: "2017", title: "Noticias UNO", text: "Presenta el informativo hasta 2020." },
  { year: "2019", title: "Caracol Radio y podcast", text: "Integra 6AM Hoy por Hoy y después lanza su propio podcast de noticias." },
];

const servicio = [
  { year: "2022", title: "Mesa de diálogo con el ELN", text: "Integra el equipo negociador del Gobierno nacional, con mayoría de mujeres en la delegación." },
  { year: "2024", title: "Secretaria de Turismo de Cali", text: "Prepara a la ciudad para la COP16 y acompaña la Feria de Cali y el Petronio Álvarez." },
  { year: "2025", title: "Secretaria de Desarrollo Económico", text: "Emprendimiento, empleo, inversión y exportaciones de las empresas caleñas." },
  { year: "2026", title: "Proyectos estratégicos", text: "Iniciativas transversales y posicionamiento internacional de Cali. Cierra su ciclo en la Alcaldía el 23 de octubre." },
];

const cifras = [
  { n: 25000, suffix: "+", label: "visitantes internacionales en la COP16" },
  { n: 3000, suffix: "+", label: "emprendimientos fortalecidos" },
  { n: 1374, suffix: "", label: "personas vinculadas laboralmente" },
  { n: 80, suffix: "", label: "empresas con su primera exportación" },
];

const pilares = [
  { t: "Voz", p: "Una periodista que construyó su propia voz y la defiende, también cuando incomoda." },
  { t: "Representación", p: "Quiere que más niñas afrocolombianas se vean en los medios, la ciencia y las instituciones." },
  { t: "Legado", p: "Pensar lo que se deja a quienes vienen después es, para ella, parte del oficio." },
];

const premios = [
  ["2007", "Premio Simón Bolívar de Periodismo", "Mejor programa cultural, por Nuestra Herencia"],
  ["2012–2019", "Premios India Catalina", "Mejor presentadora de noticias, en varias ediciones"],
  ["2012", "Premios TVyNovelas", "Mejor presentadora de noticias"],
];

function Eyebrow({ children, light = false }: { children: React.ReactNode; light?: boolean }) {
  return (
    <p className={`text-sm font-semibold uppercase tracking-[0.22em] ${light ? "text-sol" : "text-esmeralda"}`}>
      {children}
    </p>
  );
}

export default function Home() {
  return (
    <>
      <div className="bg-tinta px-4 py-2 text-center text-sm text-marfil/85">
        Versión de borrador en revisión
      </div>

      <header className="sticky top-0 z-20 border-b border-hueso bg-marfil/90 backdrop-blur">
        <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4" aria-label="Principal">
          <a href="#inicio" className="font-serif text-2xl font-semibold tracking-tight">
            Mábel Lara
          </a>
          <ul className="hidden items-center gap-7 text-[15px] lg:flex">
            {nav.map(([label, href]) => (
              <li key={href}>
                <a href={href} className="text-tinta/80 transition-colors hover:text-esmeralda">
                  {label}
                </a>
              </li>
            ))}
            <li>
              <a href="#contacto" className="rounded-full bg-tinta px-5 py-2 font-medium text-marfil transition hover:bg-esmeralda">
                Contacto
              </a>
            </li>
          </ul>
        </nav>
      </header>

      <main>
        <section id="inicio" className="mx-auto grid max-w-6xl items-center gap-14 px-6 pb-20 pt-16 md:grid-cols-[1.15fr_0.85fr] md:pt-24">
          <div>
            <Reveal>
              <Eyebrow>Periodista · Politóloga · Internacionalista</Eyebrow>
            </Reveal>
            <Reveal delay={0.08}>
              <h1 className="mt-6 font-serif text-6xl font-medium leading-[1.02] tracking-tight sm:text-8xl">
                Mábel Lara
              </h1>
            </Reveal>
            <Reveal delay={0.16}>
              <p className="mt-8 max-w-xl font-serif text-2xl leading-snug text-tinta/85">
                Más de dos décadas contando el país en televisión y radio, y una etapa de servicio público al frente
                de la agenda económica y turística de Cali.
              </p>
            </Reveal>
            <Reveal delay={0.24}>
              <div className="mt-10 flex flex-wrap gap-4">
                <a href="#trayectoria" className="rounded-full bg-esmeralda px-8 py-3.5 font-semibold text-marfil transition hover:bg-tinta">
                  Conocer su trayectoria
                </a>
                <a href="#contacto" className="rounded-full border border-tinta/30 px-8 py-3.5 font-semibold transition hover:border-esmeralda hover:text-esmeralda">
                  Contacto
                </a>
              </div>
            </Reveal>
          </div>
          <Reveal delay={0.2}>
            <figure>
              <div
                role="img"
                aria-label="Espacio reservado para el retrato oficial de Mábel Lara"
                className="photo-frame relative aspect-[4/5] w-full overflow-hidden rounded-t-[999px] border border-hueso"
              >
                <span className="absolute inset-x-0 bottom-0 h-1.5 bg-sol" />
              </div>
              <figcaption className="mt-3 text-sm text-tinta/60">Retrato oficial por incluir</figcaption>
            </figure>
          </Reveal>
        </section>

        <section aria-label="Datos clave" className="border-y border-hueso bg-hueso/40">
          <dl className="mx-auto grid max-w-6xl gap-8 px-6 py-10 sm:grid-cols-3">
            {hechos.map((h) => (
              <div key={h.dato} className="flex items-baseline gap-5">
                <dt className="font-serif text-5xl font-medium text-esmeralda">{h.dato}</dt>
                <dd className="max-w-[16rem] text-base leading-snug text-tinta/80">{h.texto}</dd>
              </div>
            ))}
          </dl>
        </section>

        <section id="trayectoria" className="mx-auto max-w-6xl px-6 py-28">
          <Reveal>
            <Eyebrow>Periodismo</Eyebrow>
            <h2 className="mt-4 max-w-2xl font-serif text-5xl font-medium leading-tight">
              Dos décadas frente a la cámara y al micrófono
            </h2>
            <div className="rule mt-8" />
          </Reveal>
          <ol className="mt-4">
            {periodismo.map((it, i) => (
              <li key={it.year + it.title}>
                <Reveal delay={i * 0.04}>
                  <div className="grid gap-2 border-b border-hueso py-8 md:grid-cols-[8rem_1fr_1.4fr] md:gap-8">
                    <p className="font-serif text-3xl text-esmeralda">{it.year}</p>
                    <h3 className="font-serif text-2xl font-medium">{it.title}</h3>
                    <p className="text-tinta/75">{it.text}</p>
                  </div>
                </Reveal>
              </li>
            ))}
          </ol>
        </section>

        <section id="servicio" className="bg-tinta text-marfil">
          <div className="mx-auto max-w-6xl px-6 py-28">
            <Reveal>
              <Eyebrow light>Servicio público</Eyebrow>
              <h2 className="mt-4 max-w-2xl font-serif text-5xl font-medium leading-tight">
                Del periodismo a la gestión de ciudad
              </h2>
            </Reveal>
            <div className="mt-14 grid gap-px bg-marfil/15 md:grid-cols-2">
              {servicio.map((s, i) => (
                <Reveal key={s.title} delay={i * 0.06}>
                  <article className="h-full bg-tinta p-8 md:p-10">
                    <p className="font-serif text-2xl text-sol">{s.year}</p>
                    <h3 className="mt-3 font-serif text-3xl font-medium leading-snug">{s.title}</h3>
                    <p className="mt-4 text-marfil/75">{s.text}</p>
                  </article>
                </Reveal>
              ))}
            </div>
            <dl className="mt-20 grid grid-cols-2 gap-10 lg:grid-cols-4">
              {cifras.map((c) => (
                <div key={c.label} className="flex flex-col-reverse border-t border-sol/60 pt-5">
                  <dt className="mt-2 text-base text-marfil/75">{c.label}</dt>
                  <dd className="font-serif text-6xl font-medium text-sol">
                    <Counter to={c.n} suffix={c.suffix} />
                  </dd>
                </div>
              ))}
            </dl>
            <p className="mt-8 text-sm text-marfil/55">Cifras reportadas por la Alcaldía de Cali.</p>
          </div>
        </section>

        <section id="voz" className="mx-auto max-w-6xl px-6 py-28">
          <Reveal>
            <Eyebrow>Su voz</Eyebrow>
            <blockquote className="mt-6 max-w-4xl font-serif text-4xl font-medium italic leading-tight sm:text-6xl">
              “Me costó tener una voz, no me voy a silenciar.”
            </blockquote>
            <p className="mt-6 text-tinta/60">Mábel Lara, entrevista con Kienyke</p>
          </Reveal>
          <div className="mt-16 grid gap-10 md:grid-cols-3">
            {pilares.map((p, i) => (
              <Reveal key={p.t} delay={i * 0.08}>
                <div className="border-t-2 border-esmeralda pt-5">
                  <h3 className="font-serif text-3xl font-medium">{p.t}</h3>
                  <p className="mt-3 text-tinta/75">{p.p}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </section>

        <section id="libro" className="bg-hueso/50">
          <div className="mx-auto grid max-w-6xl items-center gap-16 px-6 py-28 md:grid-cols-[0.8fr_1.2fr]">
            <Reveal>
              <div
                aria-hidden
                className="mx-auto flex aspect-[3/4] w-64 flex-col justify-between bg-esmeralda p-8 text-marfil shadow-xl"
              >
                <span className="text-xs font-semibold uppercase tracking-[0.25em] text-sol">Mábel Lara</span>
                <span className="font-serif text-4xl font-medium italic leading-tight">Pelo libre, alma libre</span>
              </div>
            </Reveal>
            <Reveal delay={0.1}>
              <Eyebrow>Libro · 2025</Eyebrow>
              <h2 className="mt-4 font-serif text-5xl font-medium leading-tight">Pelo libre, alma libre</h2>
              <p className="mt-6 max-w-xl text-tinta/80">
                Su decisión de presentar las noticias con su cabello natural la llevó a revisar su propia vida y a
                investigar historias de resistencia e identidad de personas afrodescendientes en Colombia y el mundo.
              </p>
              <p className="mt-4 max-w-xl text-tinta/80">
                Lo presentó en la Fiesta del Libro de Villavicencio 2026.
              </p>
              <a
                href="https://www.librerianacional.com/pelo-libre-alma-libre/p"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-8 inline-block rounded-full bg-tinta px-8 py-3.5 font-semibold text-marfil transition hover:bg-esmeralda"
              >
                Conseguir el libro
              </a>
            </Reveal>
          </div>
        </section>

        <section id="reconocimientos" className="mx-auto max-w-6xl px-6 py-28">
          <Reveal>
            <Eyebrow>Reconocimientos</Eyebrow>
            <h2 className="mt-4 font-serif text-5xl font-medium leading-tight">Premios y distinciones</h2>
            <div className="rule mt-8" />
          </Reveal>
          <ul>
            {premios.map(([year, title, text], i) => (
              <li key={title}>
                <Reveal delay={i * 0.05}>
                  <div className="grid gap-2 border-b border-hueso py-8 md:grid-cols-[10rem_1fr_1.2fr] md:gap-8">
                    <p className="font-serif text-3xl text-esmeralda">{year}</p>
                    <h3 className="font-serif text-2xl font-medium">{title}</h3>
                    <p className="text-tinta/75">{text}</p>
                  </div>
                </Reveal>
              </li>
            ))}
          </ul>
        </section>

        <section id="contacto" className="bg-tinta text-marfil">
          <div className="mx-auto max-w-4xl px-6 py-28 text-center">
            <Reveal>
              <Eyebrow light>Contacto</Eyebrow>
              <h2 className="mt-4 font-serif text-5xl font-medium leading-tight">Hablemos</h2>
              <p className="mx-auto mt-6 max-w-xl text-marfil/75">
                Para entrevistas, conferencias y proyectos, escríbele por sus redes. Pronto habrá un correo de
                contacto directo.
              </p>
              <div className="mt-10 flex flex-wrap justify-center gap-4">
                <a
                  href="https://x.com/MabelLaraNews"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-full bg-sol px-8 py-3.5 font-semibold text-tinta transition hover:bg-marfil"
                >
                  X · @MabelLaraNews
                </a>
                <a
                  href="https://www.instagram.com/mabellaranews/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-full border border-marfil/40 px-8 py-3.5 font-semibold transition hover:border-sol hover:text-sol"
                >
                  Instagram · @mabellaranews
                </a>
              </div>
            </Reveal>
          </div>
        </section>
      </main>

      <footer className="bg-tinta py-8 text-center text-sm text-marfil/50">
        © 2026 Mábel Lara · Sitio en construcción
      </footer>
    </>
  );
}
