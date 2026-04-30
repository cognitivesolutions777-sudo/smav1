import React, { Suspense } from 'react';
import NewSMA from '@/app/components/NewSMA';
import { fetchStrapiData } from '@/lib/strapi';

export default async function Home() {
  // Aquí hacemos fetch al Single Type 'landing-page' en Strapi
  // Se usa ?populate=* para traer todos los componentes y campos anidados
  const strapiRes = await fetchStrapiData('landing-page?populate=*');
  const landingData = strapiRes?.data?.attributes || strapiRes?.data || null;

  return (
    <Suspense fallback={<div className="min-h-screen bg-white" />}>
      <NewSMA initialData={landingData} />
    </Suspense>
  );
}
