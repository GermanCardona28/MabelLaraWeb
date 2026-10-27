import Counter from "@/components/Counter";
import Nav from "@/components/Nav";
import ParallaxImage from "@/components/ParallaxImage";
import Reveal from "@/components/Reveal";

const base = process.env.NEXT_PUBLIC_BASE_PATH ?? "";
const img = (file: string) => `${base}/media/${file}`;

type Step = { years: string; title: string; text: string; kind: "medios" | "publico" };

const steps: Step[] = [
  { years: "2002", kind: "medios", title: "Caracol Radio", text: "Su primer trabajo en los medios nacionales: reportera deportiva." },
  { years: "2004–2008", kind: "medios", title: "Telepacífico", text: "Presenta Nuestra Herencia, programa cultural del Pacífico que le da el Premio Simón Bolívar de Periodismo en 2007." },
  { years: "2008–2017", kind: "medios", title: "Noticias Caracol", text: "Casi una década al frente de las noticias: fin de semana, mediodía y primera emisión. Gana varios Premios India Catalina." },
  { years: "2013–2017", kind: "medios", title: "Blu Radio", text: "Integra Mañanas Blu y dirige los programas Blanco y Negro y Vive Cali." },
  { years: "2017–2020", kind: "medios", title: "Noticias UNO", text: "Presenta el informativo y vuelve a ganar el India Catalina a mejor presentadora de noticias." },
  { years: "2019–2021", kind: "medios", title: "6AM Hoy por Hoy", text: "Integra el programa matutino de Caracol Radio." },
  { years: "Desde 2021", kind: "medios", title: "Su pódcast", text: "Lanza en Spotify su propio espacio sobre noticias de Colombia y América Latina." },
  { years: "2022", kind: "publico", title: "Cabeza de lista al Senado", text: "Encabeza la lista del Nuevo Liberalismo al Senado de la República." },
  { years: "2022–2023", kind: "publico", title: "Mesa con el ELN", text: "Integra el equipo negociador del Gobierno en los diálogos con el ELN." },
  { years: "2024–2025", kind: "publico", title: "Secretaria de Turismo de Cali", text: "Lidera el turismo de la ciudad durante la COP16, la Feria de Cali y el Petronio Álvarez." },
  { years: "2025–2026", kind: "publico", title: "Secretaria de Desarrollo Económico", text: "Impulsa el emprendimiento, el empleo y las primeras exportaciones de empresas caleñas." },
  { years: "2026", kind: "publico", title: "Proyectos estratégicos", text: "Trabaja en los proyectos estratégicos de la Alcaldía de Cali hasta octubre, cuando anuncia que retoma el periodismo." },
];

const premios: [string, string][] = [
  ["Premio Simón Bolívar de Periodismo, mejor programa cultural", "2007"],
  ["Premios India Catalina, mejor presentadora de noticias", "2012–2019"],
  ["Premios TVyNovelas, mejor presentadora de noticias", "2012"],
  ["Embajadora de la Teletón en Colombia", "2017"],
];

const cargos: [string, string][] = [
  ["Cabeza de lista al Senado, Nuevo Liberalismo", "2022"],
  ["Equipo negociador del Gobierno con el ELN", "2022–2023"],
  ["Secretaria de Turismo de Cali", "2024–2025"],
  ["Secretaria de Desarrollo Económico de Cali", "2025–2026"],
  ["Proyectos estratégicos, Alcaldía de Cali", "2026"],
];

const medios = ["Noticias Caracol", "Blu Radio", "Noticias UNO", "Caracol Radio", "Telepacífico", "Spotify"];

const icons = {
  mic: (
    <svg viewBox="0 0 64 64" aria-hidden="true">
      <rect x="23" y="6" width="18" height="30" rx="9" />
      <path d="M14 28v4a18 18 0 0 0 36 0v-4M32 50v8M22 58h20" />
      <path d="M23 18h18M23 26h18" />
    </svg>
  ),
  city: (
    <svg viewBox="0 0 64 64" aria-hidden="true">
      <path d="M6 58h52M12 58V26h16v32M28 58V12h24v46" />
      <path d="M18 34h4M18 42h4M18 50h4M35 20h4M43 20h4M35 28h4M43 28h4M35 36h4M43 36h4M35 44h4M43 44h4" />
    </svg>
  ),
  sun: (
    <svg viewBox="0 0 64 64" aria-hidden="true">
      <circle cx="32" cy="38" r="12" />
      <path d="M32 8v10M10 38H4M60 38h-6M16 22l-5-5M48 22l5-5" />
      <path d="M4 54c8-6 14-6 22 0s14 6 22 0 10-4 12-2" />
    </svg>
  ),
  voice: (
    <svg viewBox="0 0 64 64" aria-hidden="true">
      <path d="M10 14h44a4 4 0 0 1 4 4v22a4 4 0 0 1-4 4H30L16 56V44h-6a4 4 0 0 1-4-4V18a4 4 0 0 1 4-4z" />
      <path d="M20 26h24M20 34h14" />
    </svg>
  ),
};

const banderas = [
  {
    icon: icons.mic,
    title: "Periodismo con voz propia",
    text: "Veinte años en televisión y radio nacionales, desde Caracol Radio hasta su propio pódcast, informando a Colombia con rigor.",
  },
  {
    icon: icons.city,
    title: "Desarrollo económico",
    text: "Desde la Secretaría de Desarrollo Económico de Cali, fortalecimiento de emprendimientos, empleo y primeras exportaciones.",
  },
  {
    icon: icons.sun,
    title: "Turismo y cultura del Pacífico",
    text: "Al frente del turismo de Cali en la COP16, la Feria de Cali y el Festival Petronio Álvarez.",
  },
  {
    icon: icons.voice,
    title: "Identidad y representación",
    text: "Su libro Pelo libre, alma libre reúne historias de resistencia afrodescendiente y de la libertad de ser quien se es.",
  },
];

const cifras = [
  { value: 3000, prefix: "+", label: "emprendimientos fortalecidos" },
  { value: 1374, label: "personas vinculadas a un empleo" },
  { value: 80, label: "empresas con su primera exportación" },
  { value: 25000, prefix: "+", label: "visitantes internacionales en la COP16" },
];

export default function Home() {
  return (
    <>
      <Nav />

      <section className="hero" id="inicio" aria-labelledby="hero-h">
        <div className="hero-photo">
          <img
            src={img("mabel-balcon.webp")}
            alt="Mábel Lara sonriendo, apoyada en la baranda de una terraza"
            width={1280}
            height={853}
            fetchPriority="high"
          />
        </div>
        <div className="hero-copy wrap">
          <p className="kicker">Periodista y politóloga</p>
          <h1 id="hero-h">
            Mábel
            <br />
            Lara
          </h1>
          <p className="hero-lede">
            Veinte años contando Colombia en televisión y radio, y casi tres al servicio de Cali.
          </p>
          <div className="hero-actions">
            <a href="#trayectoria" className="btn">
              Conoce su trayectoria
            </a>
            <a href="#contacto" className="btn btn-ghost">
              Sus redes
            </a>
          </div>
        </div>
        <ul className="hero-facts wrap" aria-label="Datos clave">
          <li>
            <b>20+</b> años en televisión y radio
          </li>
          <li>
            <b>3</b> cargos en la Alcaldía de Cali
          </li>
          <li>
            <b>1</b> libro publicado en 2025
          </li>
        </ul>
      </section>

      <div className="marquee" aria-label="Medios en los que ha trabajado">
        <div className="marquee-track" aria-hidden="true">
          {[...medios, ...medios, ...medios, ...medios].map((m, i) => (
            <span key={i}>
              {m}
              <i>✦</i>
            </span>
          ))}
        </div>
        <ul className="sr-only">
          {medios.map((m) => (
            <li key={m}>{m}</li>
          ))}
        </ul>
      </div>

      <main id="contenido">
        <section className="about wrap section" id="sobre" aria-labelledby="about-h">
          <Reveal className="about-photo">
            <figure>
              <div className="frame">
                <ParallaxImage
                  src={img("mabel-saco-verde.webp")}
                  alt="Mábel Lara con saco verde, sonriendo frente a un muro de hojas"
                  width={1280}
                  height={1440}
                  shift={5}
                />
              </div>
            </figure>
          </Reveal>
          <div className="about-text">
            <Reveal>
              <p className="kicker kicker-dark">Sobre mí</p>
              <h2 id="about-h">Prestada al servicio público</h2>
            </Reveal>
            <Reveal delay={0.08}>
              <p className="lead">
                Así se presenta en Instagram. Nacida en Puerto Tejada, Cauca, estudió Comunicación Social y Periodismo y
                construyó una carrera de dos décadas en los noticieros más vistos del país.
              </p>
              <p>
                En 2024 dejó la cámara para trabajar por Cali: primero como secretaria de Turismo y después de
                Desarrollo Económico. Hoy vuelve a contar el país, con la experiencia de haber estado del otro lado.
              </p>
            </Reveal>
            <Reveal delay={0.14}>
              <dl className="facts">
                <div>
                  <dt>Nació en</dt>
                  <dd>Puerto Tejada, Cauca</dd>
                </div>
                <div>
                  <dt>Vive en</dt>
                  <dd>Cali, Colombia</dd>
                </div>
                <div>
                  <dt>Formación</dt>
                  <dd>Periodista y politóloga</dd>
                </div>
                <div>
                  <dt>Redes</dt>
                  <dd>599 mil en Instagram</dd>
                </div>
              </dl>
            </Reveal>
          </div>
        </section>

        <section className="pillars field-step wrap section" aria-labelledby="pill-h">
          <Reveal>
            <h2 id="pill-h">Lo que la mueve</h2>
          </Reveal>
          <ul className="pillar-grid">
            {banderas.map((b, i) => (
              <li key={b.title}>
                <Reveal delay={i * 0.07} className="pillar">
                  <span className="pillar-icon">{b.icon}</span>
                  <h3>{b.title}</h3>
                  <p>{b.text}</p>
                </Reveal>
              </li>
            ))}
          </ul>
        </section>

        <section className="timeline-sec field-ink wrap section" id="trayectoria" aria-labelledby="work-h">
          <Reveal>
            <p className="kicker">Trayectoria</p>
            <h2 id="work-h">De la radio a los noticieros, y de ahí a la alcaldía</h2>
            <p className="legend">
              <span className="dot dot-medios" /> Periodismo <span className="dot dot-publico" /> Servicio público
            </p>
          </Reveal>
          <ol className="timeline">
            {steps.map((s) => (
              <li key={s.title} data-kind={s.kind}>
                <Reveal className="tl-card">
                  <span className="tl-years">{s.years}</span>
                  <h3>{s.title}</h3>
                  <p>{s.text}</p>
                </Reveal>
              </li>
            ))}
          </ol>
        </section>

        <section className="impact field-green wrap section" id="gestion" aria-labelledby="stats-h">
          <div className="impact-head">
            <Reveal>
              <p className="kicker">Gestión en Cali</p>
              <h2 id="stats-h">Resultados de su paso por la Alcaldía</h2>
            </Reveal>
            <Reveal delay={0.08}>
              <p className="lead">
                Entre 2024 y 2026 dirigió el turismo y el desarrollo económico de una de las ciudades más dinámicas del
                país.
              </p>
            </Reveal>
          </div>
          <ul className="numbers">
            {cifras.map((c, i) => (
              <li key={c.label}>
                <Reveal delay={i * 0.07}>
                  <b>
                    <Counter value={c.value} prefix={c.prefix} />
                  </b>
                  <span>{c.label}</span>
                </Reveal>
              </li>
            ))}
          </ul>
          <small>Cifras reportadas por la Alcaldía de Cali; no han sido auditadas.</small>
        </section>

        <section className="gallery wrap section" aria-labelledby="gal-h">
          <Reveal>
            <h2 id="gal-h">Cali y el Pacífico, su tierra</h2>
          </Reveal>
          <div className="mosaic">
            <figure className="m-a">
              <ParallaxImage
                src={img("festival-petronio-alvarez-cali.jpg")}
                alt="Cintas de colores colgadas en el Festival Petronio Álvarez, en Cali, con visitantes entre ellas"
                width={1920}
                height={1277}
                shift={4}
              />
              <figcaption>Festival Petronio Álvarez</figcaption>
            </figure>
            <figure className="m-b">
              <ParallaxImage
                src={img("cristo-rey-en-cali-colombia.jpg")}
                alt="Estatua del Cristo Rey de Cali con los brazos abiertos contra un cielo azul"
                width={1920}
                height={1285}
                shift={4}
              />
              <figcaption>Cristo Rey</figcaption>
            </figure>
            <figure className="m-c">
              <ParallaxImage
                src={img("carnaval-del-cali-viejo-en-la-feria.jpg")}
                alt="Dos bailarinas con turbantes y sombreros de colores en un desfile de la Feria de Cali"
                width={1920}
                height={1440}
                shift={4}
              />
              <figcaption>Feria de Cali</figcaption>
            </figure>
            <figure className="m-d">
              <ParallaxImage
                src={img("atardecer-en-el-pacifico-colombiano-10280037553.jpg")}
                alt="Atardecer en una playa del Pacífico colombiano, con una palmera caída y una persona caminando en la orilla"
                width={1920}
                height={1279}
                shift={4}
              />
              <figcaption>Pacífico colombiano</figcaption>
            </figure>
          </div>
        </section>

        <section className="book field-ink wrap section" id="libro" aria-labelledby="libro-h">
          <Reveal className="book-art">
            <div className="cover" aria-hidden="true">
              <span className="cover-author">Mábel Lara</span>
              <span className="cover-title">
                Pelo libre,
                <br />
                alma libre
              </span>
              <span className="cover-curl" />
            </div>
          </Reveal>
          <div className="book-text">
            <Reveal>
              <p className="kicker">Su libro</p>
              <h2 id="libro-h">Pelo libre, alma libre</h2>
            </Reveal>
            <Reveal delay={0.08}>
              <p className="lead">
                Presentar las noticias con su cabello natural la llevó a revisar su propia vida y a investigar historias
                de resistencia e identidad de personas afrodescendientes en Colombia y el mundo.
              </p>
              <p className="meta">302 páginas · Publicado en 2025</p>
              <a
                className="btn"
                href="https://www.librerianacional.com/pelo-libre-alma-libre/p"
                target="_blank"
                rel="noopener noreferrer"
              >
                Conseguir el libro
              </a>
            </Reveal>
          </div>
        </section>

        <section className="recog wrap section" id="reconocimientos" aria-labelledby="rec-h">
          <div>
            <Reveal>
              <h2 id="rec-h">Premios y cargos</h2>
              <h3>Reconocimientos</h3>
              <ul>
                {premios.map(([t, y]) => (
                  <li key={t}>
                    <span>{t}</span>
                    <span>{y}</span>
                  </li>
                ))}
              </ul>
              <h3>Servicio público</h3>
              <ul>
                {cargos.map(([t, y]) => (
                  <li key={t}>
                    <span>{t}</span>
                    <span>{y}</span>
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>
          <Reveal delay={0.1}>
            <figure>
              <div className="frame">
                <ParallaxImage
                  src={img("mabel-camisa-azul.webp")}
                  alt="Mábel Lara con camisa azul, con la mano en la mejilla y una sonrisa"
                  width={900}
                  height={700}
                  shift={4}
                />
              </div>
            </figure>
          </Reveal>
        </section>

        <section className="quote field-ink" aria-label="Cita">
          <div className="quote-photo">
            <img
              src={img("mabel-jardin.webp")}
              alt="Mábel Lara con blusa crema entre plantas, sonriendo a la cámara"
              width={1024}
              height={682}
              loading="lazy"
            />
          </div>
          <div className="quote-text wrap">
            <Reveal>
              <blockquote>“Me costó tener una voz, no me voy a silenciar.”</blockquote>
            </Reveal>
            <Reveal delay={0.1}>
              <cite>Mábel Lara, en entrevista con Kienyke</cite>
            </Reveal>
          </div>
        </section>

        <section className="contact field-green wrap" id="contacto" aria-labelledby="contact-h">
          <Reveal>
            <p className="kicker">Contacto</p>
            <h2 id="contact-h">Para entrevistas, conferencias y proyectos, escríbele por sus redes</h2>
          </Reveal>
          <Reveal delay={0.1} className="social">
            <a href="https://x.com/MabelLaraNews" target="_blank" rel="noopener noreferrer">
              <span>X</span>
              <b>@MabelLaraNews</b>
            </a>
            <a href="https://www.instagram.com/mabellaranews/" target="_blank" rel="noopener noreferrer">
              <span>Instagram</span>
              <b>@mabellaranews</b>
            </a>
          </Reveal>
        </section>
      </main>

      <footer className="foot">
        <div className="wrap">
          <div className="foot-cols">
            <div>
              <h2>Mábel Lara</h2>
              <p style={{ color: "var(--on-dark-soft)", maxWidth: "26rem" }}>
                Periodista, politóloga e internacionalista. Sitio en construcción.
              </p>
            </div>
            <div>
              <h2>Secciones</h2>
              <ul>
                <li>
                  <a href="#sobre">Sobre mí</a>
                </li>
                <li>
                  <a href="#trayectoria">Trayectoria</a>
                </li>
                <li>
                  <a href="#gestion">Gestión en Cali</a>
                </li>
                <li>
                  <a href="#libro">Libro</a>
                </li>
                <li>
                  <a href="#reconocimientos">Premios y cargos</a>
                </li>
              </ul>
            </div>
            <div>
              <h2>Redes</h2>
              <ul>
                <li>
                  <a href="https://x.com/MabelLaraNews" target="_blank" rel="noopener noreferrer">
                    X, @MabelLaraNews
                  </a>
                </li>
                <li>
                  <a href="https://www.instagram.com/mabellaranews/" target="_blank" rel="noopener noreferrer">
                    Instagram, @mabellaranews
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <p className="credits" style={{ marginTop: 56 }}>
            Fotografías de Cali y el Pacífico, ajenas a Mábel Lara:{" "}
            <a href="https://commons.wikimedia.org/wiki/File:Festival_Petronio_%C3%81lvarez_(Cali).jpg">
              “Festival Petronio Álvarez (Cali)”
            </a>{" "}
            de Julián Salazar Valencia,{" "}
            <a href="https://creativecommons.org/licenses/by-sa/4.0">CC BY-SA 4.0</a>;{" "}
            <a href="https://commons.wikimedia.org/wiki/File:Atardecer_en_el_pac%C3%ADfico_colombiano_(10280037553).jpg">
              “Atardecer en el pacífico colombiano”
            </a>{" "}
            de Carlos Andrés Reyes, <a href="https://creativecommons.org/licenses/by/2.0">CC BY 2.0</a>;{" "}
            <a href="https://commons.wikimedia.org/wiki/File:Cristo_Rey_en_Cali,_Colombia.jpg">
              “Cristo Rey en Cali, Colombia”
            </a>{" "}
            de Mario Carvajal, <a href="https://creativecommons.org/licenses/by/2.0">CC BY 2.0</a>;{" "}
            <a href="https://commons.wikimedia.org/wiki/File:CARNAVAL_DEL_CALI_VIEJO_EN_LA_FERIA_DE_CALI_2015.JPG">
              “Carnaval del Cali Viejo en la Feria de Cali 2015”
            </a>{" "}
            de Hectorangelazul, <a href="https://creativecommons.org/licenses/by-sa/4.0">CC BY-SA 4.0</a>. Vía Wikimedia
            Commons.
          </p>
          <div className="foot-legal">
            <span>© 2026 Mábel Lara</span>
            <a href="#inicio">Volver arriba</a>
          </div>
        </div>
        <div className="foot-name" aria-hidden="true">
          Mábel Lara
        </div>
      </footer>
    </>
  );
}
