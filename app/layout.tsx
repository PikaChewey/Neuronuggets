import './globals.css'
import { Roboto_Mono, Poppins, Playfair_Display, Fira_Sans } from 'next/font/google'
import Navbar from './components/Navbar'
import Footer from './components/Footer'

//fonts
const fira = Fira_Sans({ 
  subsets: ['latin'],
  display: 'swap',
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-inter',
})

const poppins = Poppins({ 
  subsets: ['latin'],
  display: 'swap',
  weight: ['400', '500', '600', '700'],
  variable: '--font-space-grotesk',
})

const playfair = Playfair_Display({
  subsets: ['latin'],
  display: 'swap',
  weight: ['400', '500', '600', '700'],
  variable: '--font-source-serif',
})

const robotoMono = Roboto_Mono({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-jetbrains-mono',
})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${fira.variable} ${poppins.variable} ${playfair.variable} ${robotoMono.variable}`} suppressHydrationWarning>
      <body className="min-h-screen bg-white text-primary" suppressHydrationWarning>
        <div className="relative">
          <div className="relative z-10">
            <Navbar />
            <main className="relative z-10">
              {children}
            </main>
            <Footer />
          </div>
        </div>
      </body>
    </html>
  )
} 