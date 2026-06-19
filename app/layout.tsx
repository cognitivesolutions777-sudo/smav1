import type { Metadata, Viewport } from 'next';
import { Providers } from './providers';
import './globals.css';

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  themeColor: '#ffffff',
};

export const metadata: Metadata = {
  metadataBase: new URL('https://sma-integration.vercel.app'),
  alternates: {
    canonical: '/',
  },
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
        <link href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;1,300;1,400&display=swap" rel="stylesheet" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
      </head>
      <body className="bg-white text-[#2C3830] overflow-x-hidden" suppressHydrationWarning>
        <script dangerouslySetInnerHTML={{
          __html: `window.NEXT_PUBLIC_API_URL = "${process.env.NEXT_PUBLIC_API_URL || 'http://localhost:8000'}";`
        }} />
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  );
}
