import type { Metadata, Viewport } from 'next';
import './globals.css';

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  themeColor: '#000000',
};

export const metadata: Metadata = {
  title: 'SMA - Integración 360° | Servicios Medioambientales',
  description: 'Solución completa de trazabilidad, ubicación, certificaciones y experiencia sectorial para disposición final de residuos en Perú.',
  keywords: [
    'residuos peligrosos',
    'disposición final',
    'servicios ambientales',
    'trazabilidad',
    'Perú',
    'gestión ambiental',
    'SMA'
  ],
  openGraph: {
    type: 'website',
    locale: 'es_PE',
    url: 'https://sma-integration.vercel.app',
    title: 'SMA - Integración 360°',
    description: 'Solución completa de gestión ambiental',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'SMA Integración 360°',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'SMA - Integración 360°',
    description: 'Solución completa de gestión ambiental',
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
      </head>
      <body className="bg-black text-white overflow-x-hidden" suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}
