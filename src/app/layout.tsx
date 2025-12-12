import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Boise Hot Tub Removal | Coming Soon',
  description: 'Professional hot tub and spa removal services in Boise, Idaho. Safe disconnection, hauling, and eco-friendly disposal.',
  keywords: 'hot tub removal, spa removal, Boise, Idaho, hot tub disposal, spa hauling',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
