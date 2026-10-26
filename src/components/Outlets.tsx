"use client";

import { useState } from "react";

export type Outlet = { name: string; years: string; text: string };

export default function Outlets({ outlets }: { outlets: Outlet[] }) {
  const [current, setCurrent] = useState(2);
  const o = outlets[current];

  return (
    <>
      <ul className="outlets" aria-label="Medios en los que trabajó">
        {outlets.map((it, i) => (
          <li key={it.name}>
            <button
              type="button"
              aria-pressed={i === current}
              onClick={() => setCurrent(i)}
              onMouseEnter={() => setCurrent(i)}
            >
              {it.name}
              {i < outlets.length - 1 ? "," : "."}
            </button>
          </li>
        ))}
      </ul>
      <div className="readout" aria-live="polite">
        <p>
          <strong>
            {o.name}, {o.years}.
          </strong>{" "}
          {o.text}
        </p>
      </div>
    </>
  );
}
