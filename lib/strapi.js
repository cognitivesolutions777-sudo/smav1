export async function fetchStrapiData(endpoint) {
  const strapiUrl = process.env.NEXT_PUBLIC_STRAPI_URL || process.env.STRAPI_URL || 'http://177.7.52.83:1338';
  const strapiToken = process.env.NEXT_PUBLIC_STRAPI_API_TOKEN || process.env.STRAPI_API_TOKEN;

  try {
    const res = await fetch(`${strapiUrl}/api/${endpoint}`, {
      headers: {
        Authorization: `Bearer ${strapiToken}`,
        'Content-Type': 'application/json',
      },
      cache: 'no-store', // Desactiva la caché de Next.js para ver los cambios inmediatamente
    });

    if (!res.ok) {
      console.error(`Error fetching from Strapi (${res.status}):`, await res.text());
      return null;
    }

    const data = await res.json();
    return data;
  } catch (error) {
    console.error('Fetch error:', error);
    return null;
  }
}
