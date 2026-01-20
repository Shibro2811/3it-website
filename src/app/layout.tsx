import type { Metadata } from 'next'
import { Inter, Exo_2, Unbounded } from 'next/font/google'
import './globals.css'

const inter = Inter({
  subsets: ['latin', 'cyrillic'],
  variable: '--font-inter',
})

const exo2 = Exo_2({
  subsets: ['latin', 'cyrillic'],
  variable: '--font-exo2',
})

const unbounded = Unbounded({
  subsets: ['latin', 'cyrillic'],
  variable: '--font-unbounded',
})

export const metadata: Metadata = {
  title: '3IT — Разработка программного обеспечения',
  description: 'ООО "ТРИАЙТИ" — IT-компания, специализирующаяся на разработке программного обеспечения. Веб-приложения, мобильные решения, IT-консалтинг.',
  keywords: ['разработка ПО', 'веб-разработка', 'IT-компания', 'программирование', '3IT', 'ТРИАЙТИ'],
  openGraph: {
    title: '3IT — Разработка программного обеспечения',
    description: 'IT-компания, специализирующаяся на разработке программного обеспечения',
    locale: 'ru_RU',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ru" className={`${inter.variable} ${exo2.variable} ${unbounded.variable}`}>
      <body className="font-inter">{children}</body>
    </html>
  )
}
