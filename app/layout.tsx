import type React from "react"
import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import { dadosCliente } from "@/data/cliente"
import { ClienteProvider } from "@/components/cliente-provider"
import "./globals.css"

const _geist = Geist({ subsets: ["latin"] })
const _geistMono = Geist_Mono({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: dadosCliente.seo.siteTitle,
  description: dadosCliente.seo.description,
  metadataBase: new URL(dadosCliente.seo.url),
  generator: "v0.app",
  // Nova tag de verificação inserida corretamente via Metadata API
  verification: {
    google: "lRIU7ArnQWtFNofbaEQEbbM4pRWc-U3bt8NZXhapJHQ",
  },
  openGraph: {
    title: dadosCliente.seo.siteTitle,
    description: dadosCliente.seo.description,
    type: "website",
    url: dadosCliente.seo.url,
    images: [
      {
        url: dadosCliente.seo.ogImage,
        width: 1200,
        height: 630,
      },
    ],
    locale: "pt_BR",
  },
  twitter: {
    card: "summary_large_image",
    title: dadosCliente.seo.siteTitle,
    description: dadosCliente.seo.description,
    images: [dadosCliente.seo.ogImage],
  },
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-icon.png",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-BR">
      {/* Removi as tags manuais do <head> pois o Next.js já as gera via metadata acima */}
      <body className={`font-sans antialiased`}>
        <ClienteProvider>
          {children}
        </ClienteProvider>
        <Analytics />
      </body>
    </html>
  )
}
