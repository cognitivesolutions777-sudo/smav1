/** @type {import('next').NextConfig} */
const nextConfig = {
  // Optimizaciones de rendimiento
  reactStrictMode: true,
  
  // Imágenes optimizadas
  images: {
    formats: ['image/avif', 'image/webp'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
  },

  // Compresión
  compress: true,

  // Generación de sitemap (opcional)
  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff'
          },
          {
            key: 'X-Frame-Options',
            value: 'SAMEORIGIN'
          },
          {
            key: 'X-XSS-Protection',
            value: '1; mode=block'
          },
          {
            key: 'Cache-Control',
            value: 'public, max-age=3600, s-maxage=3600, stale-while-revalidate'
          }
        ],
      },
    ];
  },

  // Rewrites (opcional para API calls)
  async rewrites() {
    return {
      beforeFiles: [
        // Aquí puedes agregar rewrites personalizados si es necesario
      ],
    };
  },

  // Configuración de base path (si necesitas servir desde un subdirectorio)
  // basePath: '/sma',

};

module.exports = nextConfig;
