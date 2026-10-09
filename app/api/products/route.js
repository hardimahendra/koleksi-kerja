export const runtime = "nodejs";

export async function GET(request) {
  const key = process.env.UNSPLASH_ACCESS_KEY;
  const query = new URL(request.url).searchParams.get("q")?.trim().slice(0, 80) || "technology workspace";
  if (!key) return Response.json({ error: "Layanan foto belum dikonfigurasi." }, { status: 503 });
  const response = await fetch(`https://api.unsplash.com/search/photos?query=${encodeURIComponent(query)}&per_page=12&orientation=landscape`, { headers: { Authorization: `Client-ID ${key}` }, next: { revalidate: 3600 } });
  if (!response.ok) return Response.json({ error: "Unsplash tidak dapat dimuat saat ini." }, { status: response.status });
  const payload = await response.json();
  return Response.json({ source: "unsplash", query, data: payload.results.map((photo) => ({ id: photo.id, alt: photo.alt_description || photo.description || "Referensi teknologi dari Unsplash", url: photo.urls.regular, author: photo.user.name, profile: photo.user.links.html, link: photo.links.html })) });
}
