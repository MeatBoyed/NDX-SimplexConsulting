import "@/styles/globals.css"

import type { Metadata, Viewport } from "next"
import { Inter } from "next/font/google"
import Image from "next/image"
import { GoogleAnalytics } from "@next/third-parties/google"

import { env } from "@/env.mjs"
import { siteConfig, SiteMetaData } from "@/config/site"
import { cn } from "@/lib/utils"
import QueryProvider from "@/components/query-provider"
import { ThemeProvider } from "@/components/theme-provider"

const inter = Inter({ subsets: ["latin"] })

interface RootLayoutProps {
  children: React.ReactNode
}

// export const metadata: Metadata = {
//   metadataBase: new URL(siteConfig.url.base),
//   title: {
//     default: siteConfig.name,
//     template: `%s | ${siteConfig.name}`,
//   },
//   description: siteConfig.description,
//   keywords: siteConfig.keywords,
//   authors: [
//     {
//       name: siteConfig.author,
//       url: siteConfig.url.author,
//     },
//   ],
//   creator: siteConfig.author,
//   openGraph: {
//     type: "website",
//     locale: "en_US",
//     url: siteConfig.url.base,
//     title: siteConfig.name,
//     description: siteConfig.description,
//     siteName: siteConfig.name,
//     images: [
//       {
//         url: siteConfig.ogImage,
//         width: 1200,
//         height: 630,
//         alt: siteConfig.name,
//       },
//     ],
//   },
//   twitter: {
//     card: "summary_large_image",
//     title: siteConfig.name,
//     description: siteConfig.description,
//     images: [siteConfig.ogImage],
//     creator: "@_rdev7",
//   },
//   icons: {
//     icon: "/favicon.ico",
//   },
// }

export const metadata = SiteMetaData

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "black" },
  ],
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en" suppressHydrationWarning>
      <meta name="apple-mobile-web-app-title" content="Simplex Consulting" />
      <head />
      <body
        className={cn(
          "min-h-screen bg-background antialiased",
          inter.className
        )}
      >
        <QueryProvider>
          <ThemeProvider
            attribute="class"
            defaultTheme="dark"
            forcedTheme="dark"
            disableTransitionOnChange
          >
            {process.env.NODE_ENV === "production" && (
              <GoogleAnalytics gaId={env.NEXT_PUBLIC_GA_TAG_ID} />
            )}
            <nav className="relative z-50 flex w-full items-center justify-center">
              <div className="flex w-full max-w-5xl items-center justify-center md:justify-start">
                <Image
                  src="/custom-logo.svg"
                  alt="Placeholder"
                  width={100}
                  height={100}
                  className="object-cover"
                />
              </div>
            </nav>

            {children}
          </ThemeProvider>
        </QueryProvider>
      </body>
    </html>
  )
}
