import Outlets, { type Outlet } from "@/components/Outlets";
import ParallaxImage from "@/components/ParallaxImage";
import Reveal from "@/components/Reveal";

const base = process.env.NEXT_PUBLIC_BASE_PATH ?? "";
const img = (file: string) => `${base}/media/${file}`;

const outlets: Outlet[] = [
  { name: "Caracol Radio", years: "2002", text: "Su primer trabajo en los medios nacionales: reportera deportiva. Volvería en 2019 a 6AM Hoy por Hoy." },
  { name: "Telepacífico", years: "2004–2008", text: "Presenta Nuestra Herencia, el programa cultural del Pacífico que le da el Premio Simón Bolívar de Periodismo en 2007." },
  { name: "Noticias Caracol", years: "2008–2017", text: "Casi una década al frente de las noticias: fin de semana, mediodía y primera emisión. Gana varios Premios India Catalina." },
  { name: "Blu Radio", years: "2013–2017", text: "Integra Mañanas Blu y dirige los programas Blanco y Negro y Vive Cali." },
  { name: "Noticias UNO", years: "2017–2020", text: "Presenta el informativo y vuelve a ganar el India Catalina a mejor presentadora de noticias." },
  { name: "6AM Hoy por Hoy", years: "2019–2021", text: "Integra el programa matutino de Caracol Radio." },
  { name: "Su pódcast", years: "desde 2021", text: "Lanza en Spotify su propio espacio sobre noticias de Colombia y América Latina." },
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

export default function Home() {
  return (
    <>
      <header className="hero" id="inicio">
        <div className="hero-top" />
        <div className="hero-bottom" />
        <div className="hero-bar">
          <a href="#inicio" className="wordmark">
            Mábel Lara
          </a>
          <a href="#contacto" className="btn">
            Contacto
          </a>
        </div>
        <div className="hero-title">
          <h1 className="title">
            Mábel
            <br />
            Lara
          </h1>
        </div>
        <p className="hero-lede">
          Periodista y politóloga. Veinte años contando Colombia en televisión y radio, y casi tres al servicio de Cali.
        </p>
      </header>

      <main id="contenido">
        <section className="field-ink wrap intro" aria-labelledby="intro-h">
          <Reveal>
            <h2 id="intro-h">
              Prestada al
              <br />
              servicio público
            </h2>
          </Reveal>
          <Reveal delay={0.12} className="intro-body">
            <p>
              Así se presenta en Instagram. Nacida en Puerto Tejada, Cauca, dejó la cámara para trabajar por Cali y hoy
              vuelve a contar.
            </p>
            <small>Instagram @mabellaranews, 599 mil seguidores</small>
          </Reveal>
        </section>

        <section className="wrap section work" id="trayectoria" aria-labelledby="work-h">
          <Reveal>
            <h2 id="work-h">Trayectoria en medios</h2>
          </Reveal>
          <Reveal delay={0.08}>
            <Outlets outlets={outlets} />
          </Reveal>
        </section>

        <figure className="band" style={{ margin: 0 }}>
          <ParallaxImage
            src={img("festival-petronio-alvarez-cali.jpg")}
            alt="Cintas de colores colgadas en el Festival Petronio Álvarez, en Cali, con visitantes entre ellas"
            width={1920}
            height={1277}
            shift={7}
          />
          <figcaption>Festival Petronio Álvarez, Cali</figcaption>
        </figure>

        <section className="field-green wrap section stats" id="gestion" aria-labelledby="stats-h">
          <div className="stats-text">
            <Reveal>
              <h2 id="stats-h">Gestión en Cali</h2>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="stats-sentence">
                Desde abril de 2025, Cali fortaleció más de <b>3.000&nbsp;emprendimientos</b>, empleó a{" "}
                <b>1.374&nbsp;personas</b> y llevó a <b>80&nbsp;empresas</b> a exportar por primera vez.
              </p>
            </Reveal>
            <Reveal delay={0.16}>
              <small>Cifras reportadas por la Alcaldía de Cali.</small>
            </Reveal>
          </div>
          <Reveal delay={0.1}>
            <figure className="stats-photo">
              <div className="frame">
                <ParallaxImage
                  src={img("cristo-rey-en-cali-colombia.jpg")}
                  alt="Estatua del Cristo Rey de Cali con los brazos abiertos contra un cielo azul"
                  width={1920}
                  height={1285}
                  shift={6}
                />
              </div>
              <figcaption className="photo-cap">Cristo Rey, Cali</figcaption>
            </figure>
          </Reveal>
        </section>

        <section className="showcase wrap" id="libro" aria-labelledby="libro-h">
          <div className="showcase-top">
            <Reveal>
              <h2 id="libro-h">Pelo libre, alma libre</h2>
            </Reveal>
            <Reveal delay={0.1}>
              <p>
                Presentar las noticias con su cabello natural la llevó a revisar su propia vida y a investigar
                historias de resistencia e identidad de personas afrodescendientes en Colombia y el mundo. Un libro de
                302 páginas, publicado en 2025.
              </p>
            </Reveal>
          </div>
          <div className="specimens" aria-hidden="true">
            <div className="specimen">
              <b>Pelo</b>
            </div>
            <div className="specimen">
              <b>Alma</b>
            </div>
          </div>
          <p className="showcase-link">
            <a
              className="link"
              href="https://www.librerianacional.com/pelo-libre-alma-libre/p"
              target="_blank"
              rel="noopener noreferrer"
            >
              Conseguir el libro
            </a>
          </p>
        </section>

        <section className="field-step section wrap recog" id="reconocimientos" aria-labelledby="rec-h">
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
                  src={img("atardecer-en-el-pacifico-colombiano-10280037553.jpg")}
                  alt="Atardecer en una playa del Pacífico colombiano, con una palmera caída y una persona caminando en la orilla"
                  width={1920}
                  height={1279}
                  shift={6}
                />
              </div>
              <figcaption className="photo-cap">Pacífico colombiano, su región de origen</figcaption>
            </figure>
          </Reveal>
        </section>

        <section className="field-ink wrap quote" aria-label="Cita">
          <div className="quote-text">
            <Reveal>
              <blockquote>“Me costó tener una voz, no me voy a silenciar.”</blockquote>
            </Reveal>
            <Reveal delay={0.1}>
              <cite>Mábel Lara, en entrevista con Kienyke</cite>
            </Reveal>
          </div>
          <Reveal delay={0.1}>
            <figure className="quote-photo">
              <div className="frame">
                <ParallaxImage
                  src={img("carnaval-del-cali-viejo-en-la-feria.jpg")}
                  alt="Dos bailarinas con turbantes y sombreros de colores en un desfile de la Feria de Cali"
                  width={1920}
                  height={1440}
                  shift={5}
                />
              </div>
              <figcaption className="photo-cap">Carnaval del Cali Viejo, Feria de Cali</figcaption>
            </figure>
          </Reveal>
        </section>

        <section className="field-green wrap contact" id="contacto" aria-labelledby="contact-h">
          <Reveal>
            <p className="ask">Para entrevistas, conferencias y proyectos, escríbele por sus redes.</p>
          </Reveal>
          <h2 id="contact-h">
            <a href="https://x.com/MabelLaraNews" target="_blank" rel="noopener noreferrer">
              @MabelLaraNews
            </a>
          </h2>
          <div className="contact-meta">
            <span>Cali, Colombia</span>
            <nav aria-label="Redes sociales">
              <a href="https://x.com/MabelLaraNews" target="_blank" rel="noopener noreferrer">
                X
              </a>
              <a href="https://www.instagram.com/mabellaranews/" target="_blank" rel="noopener noreferrer">
                Instagram
              </a>
            </nav>
          </div>
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
