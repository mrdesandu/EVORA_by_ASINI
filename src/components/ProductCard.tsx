import { Link } from "react-router-dom";
import type { Product } from "../data/products";

export default function ProductCard({ product }: { product: Product }) {
  return (
    <Link
      to={`/product/${product.slug}`}
      className="group block"
    >
      <div
        className="aspect-[4/5] rounded-[1.75rem] flex items-end p-5 overflow-hidden relative transition-transform duration-300 group-hover:-translate-y-1"
      >
        <img
          src={product.image}
          alt={product.name}
          className="absolute inset-0 w-full h-full object-cover"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ink/60 via-ink/10 to-transparent" />
        <div
          className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          style={{ background: `linear-gradient(160deg, ${product.accent}33, transparent)` }}
        />
        <span className="relative font-display text-2xl text-cream" style={{ textShadow: "0 2px 10px rgba(0,0,0,0.45)" }}>
          {product.name}
        </span>
      </div>
      <div className="mt-3 flex items-baseline justify-between">
        <div>
          <h3 className="font-display text-base text-ink">{product.name}</h3>
          <p className="font-body text-xs text-taupe mt-0.5 max-w-[14rem]">{product.tagline}</p>
        </div>
        <span className="font-body text-sm text-rose shrink-0 ml-3">
          Rs {product.price.toLocaleString()}
        </span>
      </div>
    </Link>
  );
}
