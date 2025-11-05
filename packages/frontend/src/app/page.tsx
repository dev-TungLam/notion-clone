'use client';

import { useEffect, useState } from 'react';
import { fetchFromAPI } from 'frontend/lib/api';

export default function HomePage() {
  const [message, setMessage] = useState('');

  useEffect(() => {
    fetchFromAPI('/')
      .then((data) => setMessage(data))
      .catch((err) => console.error(err));
  }, []);

  return (
    <main className="p-8">
      <h1 className="text-2xl font-bold">Frontend Connected</h1>
      <p>Backend says: {message || 'Loading...'}</p>
    </main>
  );
}
