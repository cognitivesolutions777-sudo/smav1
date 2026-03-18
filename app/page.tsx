'use client';

import React, { useState, useEffect, lazy, Suspense } from 'react';

import NewSMA from '@/app/components/NewSMA';

export default function Home() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return <div className="min-h-screen bg-white" />;
  }

  return (
    <Suspense fallback={<div className="min-h-screen bg-white" />}>
      <NewSMA />
    </Suspense>
  );
}
