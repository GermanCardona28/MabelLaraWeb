import type { Metadata } from "next";
import { Libre_Franklin, Source_Serif_4 } from "next/font/google";
import "./globals.css";
import SmoothScroll from "@/components/SmoothScroll";

const franklin = Libre_Franklin({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["700", "800"],
});

const sourceSerif = Source_Serif_4({
  variable: "--font-text",
  subsets: ["latin"],
  style: ["normal", "italic"],
  weight: ["400", "600"],
});

export const metadata: Metadata = {
  title: "Mábel Lara | Periodista y politóloga",
  description:
    "Periodista y politóloga colombiana. Más de veinte años en televisión y radio, y casi tres al servicio de Cali.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="es" className={`${franklin.variable} ${sourceSerif.variable}`}>
      <body>
        <a href="#contenido" className="skip">
          Saltar al contenido
        </a>
        <SmoothScroll />
        {children}
      </body>
    </html>
  );
}
