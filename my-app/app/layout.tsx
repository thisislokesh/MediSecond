import '@/styles/globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Get a Second Opinion from AIIMS Doctors | Trusted Medical Advice',
  description: 'Your health deserves the best advice. Book a consultation with India\'s most trusted medical experts from AIIMS. Quick, affordable, and confidential second opinions.',
  keywords: 'second medical opinion, AIIMS doctors online, trusted health advice, online doctor consultation, expert medical advice',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body className={`${inter.className} bg-gray-50`}>{children}</body>
    </html>
  )
}

