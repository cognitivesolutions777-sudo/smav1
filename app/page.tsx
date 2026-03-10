'use client';

import React, { useState, useEffect, lazy, Suspense } from 'react';

const SMAIntegration = lazy(() => import('@/app/components/SMAIntegration'));

export default function Home() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return <div className="min-h-screen bg-[#F7F4EF]" />;
  }

  return (
    <Suspense fallback={<div className="min-h-screen bg-[#F7F4EF]" />}>
      <SMAIntegration />
    </Suspense>
  );
}
