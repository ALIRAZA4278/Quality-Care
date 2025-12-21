import localFont from "next/font/local";
import "./globals.css";

const aulletta = localFont({
  src: "../../public/fonts/Aulletta.otf",
  variable: "--font-aulletta",
  display: "swap",
});

const recoleta = localFont({
  src: "../../public/fonts/Recoleta-RegularDEMO.otf",
  variable: "--font-recoleta",
  display: "swap",
});

export const metadata = {
  title: "Quality Care Senior Living",
  description:
    "Professional, compassionate personal care in a peaceful residential setting where every resident is truly treated like family.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${aulletta.variable} ${recoleta.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
