import { useState } from "react";
import { Link, Navigate, useParams } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ProductCard from "../components/ProductCard";
import { getProductBySlug, getRelatedProducts } from "../data/products";
import { useCart } from "../context/CartContext";

type Tab = "description" | "notes" | "reviews";

const sampleReviews = [
  { name: "Nadeesha P.", rating: 5, body: "Lasts the whole work day and the scent never feels overpowering. My go-to now." },
  { name: "Ruwan K.", rating: 4, body: "Beautiful bottle, beautiful scent. Wish it lasted a touch longer into the evening." },
  { name: "Hashini D.", rating: 5, body: "Got three compliments the first day I wore it. Worth every rupee." },
];

export default function ProductDetail() {
  const { slug } = useParams<{ slug: string }>();
  const foundProduct = slug ? getProductBySlug(slug) : undefined;
  const [tab, setTab] = useState<Tab>("description");
  const [quantity, setQuantity] = useState(1);
  const [added, setAdded] = useState(false);
  const { addItem } = useCart();

  if (!foundProduct) {
    return <Navigate to="/shop" replace />;
  }

  const product = foundProduct;
  const related = getRelatedProducts(product);

  function handleAddToCart() {
    addItem(product, quantity);
    setAdded(true);
    setTimeout(() => setAdded(false), 1800);
  }

  return (
    <div>
      <Navbar />

      <section className="mx-auto max-w-6xl px-6 sm:px-10 py-10 sm:py-16">
        <nav className="font-body text-xs text-taupe mb-8">
          <Link to="/shop" className="hover:text-rose">Shop</Link>
          <span className="mx-2">/</span>
          <span className="text-ink">{product.name}</span>
        </nav>

        <div className="grid sm:grid-cols-2 gap-10 sm:gap-16">
          {/* Image */}
          <div
            className="aspect-[4/5] rounded-[2.5rem] overflow-hidden relative"
          >
            <img
              src={product.image}
              alt={product.name}
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-ink/30 via-transparent to-transparent" />
          </div>

          {/* Info */}
          <div className="flex flex-col">
            <span className="eyebrow">{product.category === "women" ? "Women's Collection" : "Men's Collection"}</span>
            <h1 className="font-display text-3xl sm:text-4xl text-ink mt-2">{product.name}</h1>
            <p className="font-body text-taupe mt-3">{product.tagline}</p>

            <p className="font-display text-2xl text-rose mt-6">
              Rs {product.price.toLocaleString()}
              <span className="font-body text-sm text-taupe ml-2">/ {product.size}</span>
            </p>

            {/* Koko Payment Banner */}
            <div className="flex items-center gap-2.5 mt-2.5 bg-blush/20 border border-blush/40 px-4 py-2.5 rounded-2xl max-w-md">
              <span className="text-[0.7rem] font-body font-semibold tracking-wide uppercase text-rose-dark bg-white border border-rose-soft/40 px-2 py-0.5 rounded-md shadow-xs">
                Koko
              </span>
              <span className="font-body text-xs text-taupe">
                or 3 interest-free installments of <span className="font-semibold text-rose-dark">Rs {Math.round(product.price / 3).toLocaleString()}</span>
              </span>
            </div>

            <p className="font-body text-sm text-ink/80 mt-6 leading-relaxed max-w-md">
              {product.description}
            </p>

            {/* Quantity + Add to cart */}
            <div className="flex items-center gap-5 mt-8">
              <div className="flex items-center border border-taupe-light rounded-full overflow-hidden">
                <button
                  onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                  className="w-9 h-9 font-body text-lg text-rose hover:bg-blush transition-colors"
                  aria-label="Decrease quantity"
                >
                  −
                </button>
                <span className="w-10 text-center font-body text-sm">{quantity}</span>
                <button
                  onClick={() => setQuantity((q) => q + 1)}
                  className="w-9 h-9 font-body text-lg text-rose hover:bg-blush transition-colors"
                  aria-label="Increase quantity"
                >
                  +
                </button>
              </div>

              <button onClick={handleAddToCart} className="btn-primary flex-1 sm:flex-none">
                {added ? "Added ✓" : "Add to Cart"}
              </button>
            </div>

            {added && (
              <p className="font-body text-xs text-rose mt-3">
                Added to cart. <Link to="/cart" className="underline">View cart</Link>
              </p>
            )}

            {/* Tabs */}
            <div className="mt-10 border-t border-taupe-light/50 pt-6">
              <div className="flex gap-6">
                {(["description", "notes", "reviews"] as Tab[]).map((t) => (
                  <button
                    key={t}
                    onClick={() => setTab(t)}
                    className={`font-body text-xs tracking-[0.12em] uppercase pb-2 border-b-2 transition-colors ${
                      tab === t ? "border-rose text-rose" : "border-transparent text-taupe hover:text-ink"
                    }`}
                  >
                    {t === "notes" ? "Fragrance Notes" : t}
                  </button>
                ))}
              </div>

              <div className="mt-5 font-body text-sm text-ink/80 leading-relaxed">
                {tab === "description" && <p>{product.description}</p>}

                {tab === "notes" && (
                  <ul className="space-y-2">
                    <li><span className="text-rose font-medium">Top:</span> {product.notes.top.join(", ")}</li>
                    <li><span className="text-rose font-medium">Heart:</span> {product.notes.heart.join(", ")}</li>
                    <li><span className="text-rose font-medium">Base:</span> {product.notes.base.join(", ")}</li>
                  </ul>
                )}

                {tab === "reviews" && (
                  <ul className="space-y-4">
                    {sampleReviews.map((r) => (
                      <li key={r.name} className="border-b border-taupe-light/40 pb-4 last:border-none">
                        <div className="flex items-center justify-between">
                          <span className="font-medium text-ink">{r.name}</span>
                          <span className="text-rose text-xs">{"★".repeat(r.rating)}{"☆".repeat(5 - r.rating)}</span>
                        </div>
                        <p className="mt-1 text-taupe text-sm">{r.body}</p>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {related.length > 0 && (
        <section className="mx-auto max-w-6xl px-6 sm:px-10 py-12 sm:py-20 border-t border-taupe-light/40">
          <h2 className="font-display text-2xl text-ink mb-8">You May Also Like</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-x-5 gap-y-10">
            {related.map((p) => (
              <ProductCard key={p.slug} product={p} />
            ))}
          </div>
        </section>
      )}

      <Footer />
    </div>
  );
}
