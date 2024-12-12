// TODO: Update SiteConfig & Metadata
import { Metadata } from "next"
import { SiteConfig } from "@/types"

import { env } from "@/env.mjs"

export const siteConfig: SiteConfig = {
  name: "Simplex Consulting",
  author: "Simplex Consulting",
  description:
    "Revolutionizing consulting with innovative, client-focused solutions. Simplex Consulting simplifies complexity to empower businesses for sustainable growth in the digital age.",
  keywords: [
    "Simplex Consulting",
    "Consulting Services",
    "Business Solutions",
    "Digital Transformation",
    "Sustainable Growth",
    "Data-Driven Insights",
    "Business Performance",
    "Technology-Driven Strategies",
  ],
  url: {
    base: "https://simplexconsulting.co.za",
    author: "https://nerfdesigns.com",
  },
  links: {
    github: "", // Remove if not applicable
  },
  ogImage: "https://simplexconsulting.co.za/og.jpg",
}

export const SiteMetaData: Metadata = {
  metadataBase: new URL(env.NEXT_PUBLIC_APP_URL),
  title: {
    default: siteConfig.name,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: siteConfig.keywords,
  authors: [
    {
      name: siteConfig.author,
      url: siteConfig.url.author,
    },
  ],
  creator: siteConfig.author,
  openGraph: {
    siteName: siteConfig.name,
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.name,
    description: siteConfig.description,
    images: [siteConfig.ogImage],
    creator: "@nerfdesigns",
  },
  robots: {
    index: true,
    follow: true,
    "max-image-preview": "large",
    "max-snippet": -1,
    "max-video-preview": -1,
    googleBot: "index, follow",
  },
  alternates: {
    // types: {
    //   "application/rss+xml": "https://dminhvu.com/rss.xml",
    // },
  },
  applicationName: siteConfig.name,
  appleWebApp: {
    title: siteConfig.name,
    statusBarStyle: "default",
    capable: true,
  },
  // verification: {
  //   google: "YOUR_DATA",
  //   yandex: ["YOUR_DATA"],
  //   other: {
  //     "msvalidate.01": ["YOUR_DATA"],
  //     "facebook-domain-verification": ["YOUR_DATA"],
  //   },
  // },
  icons: {
    icon: [
      {
        url: "/favicon.ico",
        type: "image/x-icon",
      },
      {
        url: "/favicon-16x16.png",
        sizes: "16x16",
        type: "image/png",
      },
      // add favicon-32x32.png, favicon-96x96.png, android-chrome-192x192.png
    ],
    shortcut: [
      {
        url: "/favicon.ico",
        type: "image/x-icon",
      },
    ],
    apple: [
      {
        url: "/apple-icon-57x57.png",
        sizes: "57x57",
        type: "image/png",
      },
      {
        url: "/apple-icon.png",
        sizes: "60x60",
        type: "image/png",
      },
      // add apple-icon-72x72.png, apple-icon-76x76.png, apple-icon-114x114.png, apple-icon-120x120.png, apple-icon-144x144.png, apple-icon-152x152.png, apple-icon-180x180.png
    ],
  },
}

export const jsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: "Simplex Consulting",
  description:
    "Simplex Consulting revolutionizes the consulting industry with innovative, client-focused solutions, empowering businesses to excel in the digital age.",
  url: "https://simplexconsulting.co.za", // Replace with the real website URL
  image: "https://simplexconsulting.co.za/assets/og-image.png", // Replace with the actual OG image URL
  telephone: env.PHONE_NUMBER, // Replace with Simplex Consulting's contact number
  // address: {
  //   "@type": "PostalAddress",
  //   streetAddress: "123 Business Road",
  //   addressLocality: "Johannesburg",
  //   addressRegion: "Gauteng",
  //   postalCode: "2000",
  //   addressCountry: "ZA",
  // },
  // geo: {
  //   "@type": "GeoCoordinates",
  //   latitude: -26.2041, // Replace with actual coordinates
  //   longitude: 28.0473,
  // },
  sameAs: [
    "https://www.linkedin.com/company/simplex-consulting", // Replace with Simplex Consulting's LinkedIn or social links
    "https://twitter.com/simplexconsulting",
  ],
  priceRange: "$$$", // Adjust based on pricing
  mainEntityOfPage: {
    "@type": "WebPage",
    "@id": "https://simplexconsulting.co.za",
  },
  headline:
    "Revolutionizing Consulting for the Digital Age | Simplex Consulting",
  dateCreated: "2024-12-13T08:00:00+02:00",
  datePublished: "2024-12-13T08:00:00+02:00",
  dateModified: new Date().toJSON(),
  author: {
    "@type": "Organization",
    name: "Nerf Designs",
    url: "https://nerfdesigns.com", // Your business website
    logo: {
      "@type": "ImageObject",
      url: "https://nerfdesigns.com/assets/logo.png", // Replace with Nerf Designs' logo URL
    },
  },
  publisher: {
    "@type": "Organization",
    name: "Simplex Consulting",
    logo: {
      "@type": "ImageObject",
      url: "https://simplexconsulting.co.za/assets/logo.png", // Replace with Simplex Consulting's logo URL
    },
  },
  inLanguage: "en-ZA",
  isFamilyFriendly: "true",
}
