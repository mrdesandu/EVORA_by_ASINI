import { useMemo, useState } from "react";
import { useSearchParams } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ProductCard from "../components/ProductCard";
import { products, type Category } from "../data/products";

type SortKey = "featured" | "price-asc" | "price-desc" | "name";

const tabs: { label: string; value: Category | "all" }[] = [
  { label: "All", value: "all" },
  { label: "Women's", value: "women" },
  { label: "Men's", value: "men" },
];

export default function Shop() {
  const [searchParams, setSearchParams] = useSearchParams();
  const categoryParam = (searchParams.get("category") as Category | null) ?? "all";
  const [query, setQuery] = useState("");
  const [sort, setSort] = useState<SortKey>("featured");

  function setCategory(value: Category | "all") {
    if (value === "all") {
      searchParams.delete("category");
    } else {
      searchParams.set("category", value);
    }
    setSearchParams(searchParams);
  }

  const filtered = useMemo(() => {
    let list = products;
    if (categoryParam !== "all") {
      list = list.filter((p) => p.category === categoryParam);
    }
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
  }, [categoryParam, query, sort]);

  return (
    <div>
      <Navbar />

      <section className="bg-blush">
        <div className="mx-auto max-w-6xl px-6 sm:px-10 py-12 sm:py-16 text-center">
          <span className="eyebrow">The Collection</span>
          <h1 className="font-display text-3xl sm:text-4xl text-ink mt-3">
            Every Scent, One Story
          </h1>
          <p className="font-body text-taupe mt-3 max-w-xl mx-auto">
            Eight fragrances, each one drawn from a different corner of nature
            — find the one that matches yours.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 sm:px-10 py-10">
        {/* Controls */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-5 mb-10">
          <div className="flex gap-2">
            {tabs.map((tab) => (
              <button
                key={tab.value}
                onClick={() => setCategory(tab.value)}
                className={`font-body text-xs tracking-[0.12em] uppercase px-4 py-2 rounded-full border transition-colors ${
                  categoryParam === tab.value
                    ? "bg-rose text-cream border-rose"
                    : "border-taupe-light text-taupe hover:border-rose hover:text-rose"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          <div className="flex gap-3 items-center">
            <input
              type="search"
              placeholder="Search fragrances…"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              className="font-body text-sm px-4 py-2 rounded-full border border-taupe-light bg-cream outline-none focus-visible:ring-2 focus-visible:ring-rose/40 w-44 sm:w-56"
              aria-label="Search fragrances"
            />
            <select
              value={sort}
              onChange={(e) => setSort(e.target.value as SortKey)}
              className="font-body text-sm px-3 py-2 rounded-full border border-taupe-light bg-cream outline-none focus-visible:ring-2 focus-visible:ring-rose/40"
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
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-x-5 gap-y-10">
            {filtered.map((p) => (
              <ProductCard key={p.slug} product={p} />
            ))}
          </div>
        ) : (
          <div className="text-center py-20">
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
