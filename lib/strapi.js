export async function fetchStrapiData(endpoint) {
  const strapiUrl = process.env.NEXT_PUBLIC_STRAPI_URL || process.env.STRAPI_URL || 'http://177.7.52.83:1338';
  const strapiToken = process.env.NEXT_PUBLIC_STRAPI_API_TOKEN || process.env.STRAPI_API_TOKEN;

  // Usamos AbortController para evitar que la petición espere eternamente si Strapi está caído
  const controller = new AbortController();
  const timeoutId = setTimeout(() => controller.abort(), 500); // 0.5 segundos de timeout para carga inmediata si falla

  try {
    const res = await fetch(`${strapiUrl}/api/${endpoint}`, {
      headers: {
        Authorization: `Bearer ${strapiToken}`,
        'Content-Type': 'application/json',
      },
      next: { revalidate: 60 }, // Activa ISR para cachear la respuesta por 60 segundos y acelerar la web
      signal: controller.signal,
    });

    clearTimeout(timeoutId);

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
