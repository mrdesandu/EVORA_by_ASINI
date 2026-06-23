import { useMemo, useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ProductCard from "../components/ProductCard";
import { products } from "../data/products";

type SortKey = "featured" | "price-asc" | "price-desc" | "name";

export default function MenCollection() {
  const [query, setQuery] = useState("");
  const [sort, setSort] = useState<SortKey>("featured");

  const menProducts = useMemo(() => {
    return products.filter((p) => p.category === "men");
  }, []);

  const filtered = useMemo(() => {
    let list = menProducts;
    
    if (query.trim()) {
      const q = query.trim().toLowerCase();
      list = list.filter(
        (p) => p.name.toLowerCase().includes(q) || p.tagline.toLowerCase().includes(q)
      );
    }
    
    const sorted = [...list];
    if (sort === "price-asc") sorted.sort((a, b) => a.price - b.price);
    if (sort === "price-desc") sorted.sort((a, b) => b.price - a.price);
    if (sort === "name") sorted.sort((a, b) => a.name.localeCompare(b.name));
    return sorted;
  }, [menProducts, query, sort]);

  return (
    <div className="bg-cream min-h-screen">
      <Navbar />

      {/* Hero Banner */}
      <section className="relative overflow-hidden bg-gradient-to-b from-ink/10 to-cream border-b border-ink/5">
        {/* Subtle decorative circles */}
        <div className="absolute top-10 right-10 w-72 h-72 bg-rose-dark/10 rounded-full blur-3xl" />
        <div className="absolute -bottom-10 left-10 w-96 h-96 bg-taupe-light/35 rounded-full blur-3xl" />
        
        <div className="relative mx-auto max-w-6xl px-6 sm:px-10 py-16 sm:py-24 text-center">
          <span className="eyebrow" style={{ color: "var(--color-ink)" }}>For Him</span>
          <h1 className="font-display text-4xl sm:text-5xl text-ink mt-3">
            Men's Collection
          </h1>
          <p className="font-body text-taupe mt-4 max-w-xl mx-auto leading-relaxed">
            Rich cacao notes, clean apple freshness, and warm spices. 
            Discover three bold fragrances crafted to leave a memorable impression.
          </p>
        </div>
      </section>

      {/* Controls and Grid */}
      <section className="mx-auto max-w-6xl px-6 sm:px-10 py-10 sm:py-16">
        {/* Controls */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-end gap-5 mb-12">
          <div className="flex flex-wrap gap-3 items-center">
            <input
              type="search"
              placeholder="Search men's scents…"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              className="font-body text-sm px-4 py-2 rounded-full border border-taupe-light bg-cream outline-none focus-visible:ring-2 focus-visible:ring-ink/40 w-full sm:w-56"
              aria-label="Search men's fragrances"
            />
            <select
              value={sort}
              onChange={(e) => setSort(e.target.value as SortKey)}
              className="font-body text-sm px-3 py-2 rounded-full border border-taupe-light bg-cream outline-none focus-visible:ring-2 focus-visible:ring-ink/40 cursor-pointer"
              aria-label="Sort products"
            >
              <option value="featured">Featured</option>
              <option value="price-asc">Price: Low to High</option>
              <option value="price-desc">Price: High to Low</option>
              <option value="name">Name: A–Z</option>
            </select>
          </div>
        </div>

        {/* Grid */}
        {filtered.length > 0 ? (
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-x-6 gap-y-12">
            {filtered.map((product) => (
              <ProductCard key={product.slug} product={product} />
            ))}
          </div>
        ) : (
          <div className="text-center py-24">
            <p className="font-display text-xl text-ink">No fragrances match that search.</p>
            <p className="font-body text-sm text-taupe mt-2">
              Try a different name or clear the filters above.
            </p>
          </div>
        )}
      </section>

      <Footer />
    </div>
  );
}
