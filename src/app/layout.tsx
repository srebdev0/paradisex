// src/app/layout.tsx
import './globals.css'
import { ReactNode } from 'react'

export const metadata = {
  title: 'Plantation Estates',
  description: 'Own your private plantation estate in Chikmagalur',
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-white text-gray-800">
        {children}
      </body>
    </html>
  )
}