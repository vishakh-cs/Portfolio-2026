'use client';
import React, { useEffect, useState } from 'react';
import Hero from './components/hero/hero';
import Loader from './components/Loader/Loader';

export default function Page() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const hasLoaderShown = sessionStorage.getItem('loader-shown');

    if (hasLoaderShown) {
      setIsLoading(false);
      return;
    }

    sessionStorage.setItem('loader-shown', 'true');

    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen overflow-x-hidden">
      {isLoading ? <Loader /> : <Hero />}
    </div>
  );
}
