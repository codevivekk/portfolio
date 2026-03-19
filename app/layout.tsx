import type { Metadata } from 'next'
import './globals.css'
import { ThemeProvider } from '@/components/ThemeContext'

export const metadata: Metadata = {
  title: 'Vivek Kushwaha — FullStack Engineer',
  description: 'Full Stack Engineer specializing in React, Next.js, and blockchain-integrated applications. Building at scale with 100K+ users.',
  keywords: ['Vivek Kushwaha', 'Frontend Developer', 'Full Stack', 'React', 'Next.js', 'Blockchain'],
  authors: [{ name: 'Vivek Kushwaha' }],
  openGraph: {
    title: 'Vivek Kushwaha — FullStack Engineer',
    description: 'Full Stack Engineer. 100K+ users. Blockchain. Real-time. Performance.',
    url: 'https://vivek.dev',
    type: 'website',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
