import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { AppProviders } from '@/providers'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
})

export const metadata: Metadata = {
  title: {
    default: 'ToolVault',
    template: '%s | ToolVault',
  },
  description:
    'Engineering infrastructure for innovators. Access professional tools, collaborative workspaces, and expert guidance.',
  keywords: [
    'engineering',
    'tools',
    'prototyping',
    'workspace',
    'innovation',
    'lab',
  ],
  authors: [{ name: 'ToolVault' }],
  creator: 'ToolVault',
  metadataBase: new URL('https://toolvault.io'),
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://toolvault.io',
    siteName: 'ToolVault',
    title: 'ToolVault — Engineering Infrastructure for Innovators',
    description:
      'Access professional engineering equipment, collaborative workspaces, expert guidance, and end-to-end prototyping infrastructure.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'ToolVault — Engineering Infrastructure for Innovators',
    description:
      'Access professional engineering equipment, collaborative workspaces, expert guidance, and end-to-end prototyping infrastructure.',
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="font-sans antialiased">
        <AppProviders>{children}</AppProviders>
      </body>
    </html>
  )
}
