import type { Metadata } from "next";
import { Newsreader, Source_Sans_3 } from "next/font/google";
import "./globals.css";
import SmoothScroll from "@/components/SmoothScroll";

const newsreader = Newsreader({
  variable: "--font-newsreader",
  subsets: ["latin"],
  style: ["normal", "italic"],
  axes: ["opsz"],
});

const source = Source_Sans_3({
  variable: "--font-source",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Mábel Lara | Periodista y politóloga",
  description:
    "Periodista, politóloga e internacionalista colombiana. Más de veinte años en televisión y radio, y una etapa de servicio público en Cali.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="es" className={`${newsreader.variable} ${source.variable} antialiased`}>
      <body>
        <SmoothScroll />
        {children}
      </body>
    </html>
  );
}
