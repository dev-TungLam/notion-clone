// packages/frontend/src/lib/api.ts

const API_URL = process.env.NEXT_PUBLIC_BACKEND_URL || 'http://localhost:4000';

export async function fetchFromAPI(endpoint: string, options?: RequestInit) {
  const res = await fetch(`${API_URL}${endpoint}`, options);
  if (!res.ok) throw new Error(`API error: ${res.status}`);
  return res.json();
}
