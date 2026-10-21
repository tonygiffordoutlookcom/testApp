'use client';

import { useState } from 'react';

export default function Home() {
  const [apiData, setApiData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchBackend = async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await fetch('/api/test');
      if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
      const data = await response.json();
      setApiData(data);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <main>
      <div stlye={{ display: 'flex', justify-content: 'center', align-items: 'center' }}><img src="./1600 x400 banner.png" /></div>


      <section style={{ display:'none', marginTop: '2rem', padding: '1rem', border: '1px solid #ccc', borderRadius: '8px' }}>
      <h1>Cloudflare Tunnel Test App</h1>
      <p>Status: Frontend is accessible.</p>
        <h2>Backend Connection Test</h2>
        <button onClick={fetchBackend} style={{ padding: '0.5rem 1rem', cursor: 'pointer' }}>
          Test API Fetch (/api/test)
        </button>

        {loading && <p>Loading backend data...</p>}
        {error && <p style={{ color: 'red' }}>Error: {error}</p>}
        {apiData && (
          <pre style={{ background: '#f4f4f4', padding: '1rem', marginTop: '1rem', borderRadius: '4px' }}>
            {JSON.stringify(apiData, null, 2)}
          </pre>
        )}
      </section>
    </main>
  );
}
