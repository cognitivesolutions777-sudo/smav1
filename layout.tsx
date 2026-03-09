import type { Metadata } from 'next';
import './globals.css';

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
  viewport: {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 5,
  },
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
        {/* Preconnect a recursos externos */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        
        {/* Favicon */}
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        
        {/* Manifest para PWA (opcional) */}
        <link rel="manifest" href="/manifest.json" />
        
        {/* Meta tags adicionales */}
        <meta name="theme-color" content="#000000" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
      </head>
      <body className="bg-black text-white overflow-x-hidden">
        {children}
        
        {/* Google Analytics (opcional) */}
        {/* 
        <script async src="https://www.googletagmanager.com/gtag/js?id=GA_ID"></script>
        <script>
          {`window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'GA_ID');`}
        </script>
        */}
      </body>
    </html>
  );
}
