'use client';

import { useEffect, useState } from 'react';

export default function HomePage() {
  const [ping, setPing] = useState<string>('');

  useEffect(() => {
    const apiUrl = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:4000';
    fetch(`${apiUrl}/ping`)
      .then((res) => res.json())
      .then((data) => setPing(data.message))
      .catch((err) => setPing('Error: ' + err.message));
  }, []);

  return (
    <main className="flex flex-col items-center justify-center min-h-screen">
      <h1 className="text-2xl font-bold">Frontend is running ✅</h1>
      <p className="mt-4">Backend says: {ping || 'Loading...'}</p>
    </main>
  );
}
