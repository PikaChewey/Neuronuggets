'use client';

import { useEffect, useState } from 'react';
import dynamic from 'next/dynamic';

// dynamical import  ParticleBackground
const ParticleBackground = dynamic(
  () => import('./ParticleBackground'),
  { ssr: false }
);

export const ParticleBackgroundWrapper = () => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  //  render client
  if (!isMounted) return null;

  return <ParticleBackground />;
}; 