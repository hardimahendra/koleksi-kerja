"use client";

import { useEffect, useState } from "react";

const topics = [["Workspace", "technology workspace"], ["Laptop", "laptop developer desk"], ["Hardware", "computer hardware"], ["Code", "programming screen"]];

export default function Storefront() {
  const [topic, setTopic] = useState(topics[0]);
  const [photos, setPhotos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const controller = new AbortController();
    async function load() {
      setLoading(true); setError("");
      try {
        const response = await fetch(`/api/products?q=${encodeURIComponent(topic[1])}`, { signal: controller.signal });
        const payload = await response.json();
        if (!response.ok) throw new Error(payload.error || "Referensi tidak dapat dimuat.");
        setPhotos(payload.data);
      } catch (reason) {
        if (reason.name !== "AbortError") setError(reason.message || "Referensi tidak dapat dimuat.");
      } finally { setLoading(false); }
    }
    load();
    return () => controller.abort();
  }, [topic]);

  return <main className="visual-library">
    <header className="library-header"><a className="library-logo" href="#koleksi"><span>k</span>koleksi<br /><b>kerja</b></a><p>TECHNOLOGY REFERENCE LIBRARY</p><a href="https://unsplash.com" target="_blank" rel="noreferrer">Foto oleh Unsplash ↗</a></header>
    <section className="library-hero" id="koleksi"><p>KOLEKSI FOTO TEKNOLOGI · LIVE</p><h1>Referensi untuk<br /><i>ruang kerja digital.</i></h1><span>Foto diperbarui dari Unsplash. Tidak ada produk, harga, atau checkout.</span></section>
    <section className="library-toolbar" aria-label="Topik foto teknologi"><div>{topics.map((entry) => <button key={entry[0]} className={topic[0] === entry[0] ? "active" : ""} aria-pressed={topic[0] === entry[0]} onClick={() => setTopic(entry)}>{entry[0]}</button>)}</div><p>{loading ? "Memuat referensi…" : `${photos.length} FOTO TERPILIH`}</p></section>
    {error ? <section className="library-state" role="alert"><h2>{error}</h2><p>Pastikan konfigurasi Unsplash tersedia, lalu coba muat ulang halaman.</p><button onClick={() => setTopic([...topic])}>Coba lagi</button></section> : null}
    {!error && <section className="library-grid" aria-live="polite">{photos.map((photo) => <article key={photo.id}><a href={photo.link} target="_blank" rel="noreferrer" aria-label={`Buka foto ${photo.alt} di Unsplash`}><img src={photo.url} alt={photo.alt} /></a><div><p>{topic[0]} · UNSPLASH</p><h2>{photo.alt}</h2><span>Foto oleh <a href={photo.profile} target="_blank" rel="noreferrer">{photo.author}</a></span></div></article>)}{loading && Array.from({ length: 8 }, (_, index) => <div className="library-skeleton" key={index} aria-hidden="true" />)}</section>}
    {!loading && !error && !photos.length ? <section className="library-state"><h2>Belum ada referensi untuk topik ini.</h2><p>Coba pilih topik teknologi lain.</p></section> : null}
    <footer className="library-footer"><span>KOLEKSI KERJA</span><span>UNSPLASH API · FOTO OLEH KONTRIBUTOR</span></footer>
  </main>;
}
