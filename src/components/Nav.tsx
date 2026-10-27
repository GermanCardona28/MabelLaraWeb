"use client";

import { useEffect, useState } from "react";

const links = [
  ["#sobre", "Sobre mí"],
  ["#trayectoria", "Trayectoria"],
  ["#gestion", "Gestión en Cali"],
  ["#libro", "Libro"],
  ["#contacto", "Contacto"],
] as const;

export default function Nav() {
  const [solid, setSolid] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const on = () => setSolid(window.scrollY > 40);
    on();
    window.addEventListener("scroll", on, { passive: true });
    return () => window.removeEventListener("scroll", on);
  }, []);

  useEffect(() => {
    if (!open) return;
    const esc = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", esc);
    return () => window.removeEventListener("keydown", esc);
  }, [open]);

  return (
    <header className="nav" data-solid={solid || open} data-open={open}>
      <div className="nav-in">
        <a href="#inicio" className="wordmark" onClick={() => setOpen(false)}>
          Mábel Lara
        </a>
        <nav id="menu" aria-label="Principal" className="nav-links">
          {links.map(([href, label]) => (
            <a key={href} href={href} onClick={() => setOpen(false)}>
              {label}
            </a>
          ))}
        </nav>
        <button
          type="button"
          className="nav-toggle"
          aria-expanded={open}
          aria-controls="menu"
          onClick={() => setOpen((o) => !o)}
        >
          {open ? "Cerrar" : "Menú"}
        </button>
      </div>
    </header>
  );
}
