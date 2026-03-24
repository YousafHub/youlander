import "./globals.css";
import { Inter, Orbitron } from 'next/font/google'


// Configure Orbitron for headings
const orbitron = Orbitron({
  subsets: ['latin'],
  variable: '--font-orbitron',
  display: 'swap',
  weight: ['400', '500', '600', '700', '800', '900'],
})

// Configure Inter for body text
const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
  weight: ['300', '400', '500', '600', '700'],
})

export const metadata = {
  title: 'Youlander - Créez votre site web dès 299 €',
  description: 'Un site moderne, rapide et connecté au monde. Boostez votre présence en ligne.',
}

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${orbitron.variable} ${inter.variable}`}
    >
      <body className={`bg-[#0A0F29] md:mx-12 font-body antialiased`}>
        {children}
        </body>
    </html>
  );
}
