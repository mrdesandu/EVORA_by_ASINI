export type Category = "women" | "men";

export interface Product {
  slug: string;
  name: string;
  category: Category;
  tagline: string;
  description: string;
  notes: {
    top: string[];
    heart: string[];
    base: string[];
  };
  price: number;
  size: string;
  accent: string; // hex used for this product's card wash
  image: string; // product photo URL
}

export const products: Product[] = [
  {
    slug: "lotus",
    name: "Lotus",
    category: "women",
    tagline: "Fresh, calm, and elegant floral fragrance.",
    description:
      "Inspired by the beauty and purity of the lotus flower, Lotus opens with a clean aquatic freshness that settles into a calm, elegant floral heart. Built for women who carry quiet confidence.",
    notes: {
      top: ["Water Lily", "Bergamot"],
      heart: ["White Lotus", "Jasmine"],
      base: ["White Musk", "Soft Wood"],
    },
    price: 7200,
    size: "50ml",
    accent: "#E8A4B8",
    image: "/lotus-product.jpg",
  },
  {
    slug: "sakura",
    name: "Sakura",
    category: "women",
    tagline: "Soft, delicate, and feminine scent.",
    description:
      "Inspired by Japanese cherry blossoms, Sakura is a soft veil of pink petals — delicate, feminine, and effortlessly graceful from morning into evening.",
    notes: {
      top: ["Cherry Blossom", "Pear"],
      heart: ["Peony", "Rose Petal"],
      base: ["Cedarwood", "Musk"],
    },
    price: 7500,
    size: "50ml",
    accent: "#F2C6D4",
    image: "/sakura-product.jpg",
  },
  {
    slug: "araliya",
    name: "Araliya",
    category: "women",
    tagline: "Tropical floral fragrance with a refreshing touch.",
    description:
      "Inspired by Sri Lanka's national flower, Araliya brings a tropical floral brightness with a refreshing touch — a fragrance rooted in home soil.",
    notes: {
      top: ["Frangipani", "Citrus Zest"],
      heart: ["Tropical Floral Accord", "Tuberose"],
      base: ["Sandalwood", "Amber"],
    },
    price: 6900,
    size: "50ml",
    accent: "#D98DA8",
    image: "https://images.pexels.com/photos/33994391/pexels-photo-33994391.jpeg?auto=compress&cs=tinysrgb&w=800",
  },
  {
    slug: "rose",
    name: "Rose",
    category: "women",
    tagline: "Romantic and timeless floral scent.",
    description:
      "A romantic, timeless floral scent — perfect for special occasions and daily wear alike. Rose is the EVORA classic that never goes out of season.",
    notes: {
      top: ["Rose Petal", "Pink Pepper"],
      heart: ["Damask Rose", "Lychee"],
      base: ["White Musk", "Vanilla"],
    },
    price: 7800,
    size: "50ml",
    accent: "#C9416A",
    image: "https://images.pexels.com/photos/19879634/pexels-photo-19879634.jpeg?auto=compress&cs=tinysrgb&w=800",
  },
  {
    slug: "lily",
    name: "Lily",
    category: "women",
    tagline: "Light, graceful, and sophisticated fragrance.",
    description:
      "Designed for modern women who appreciate elegance — Lily is light, graceful, and quietly sophisticated, never overstated.",
    notes: {
      top: ["Green Lily", "Mandarin"],
      heart: ["Lily of the Valley", "Iris"],
      base: ["Soft Musk", "Driftwood"],
    },
    price: 7300,
    size: "50ml",
    accent: "#EAB7C6",
    image: "https://images.pexels.com/photos/7524979/pexels-photo-7524979.jpeg?auto=compress&cs=tinysrgb&w=800",
  },
  {
    slug: "apple",
    name: "Apple",
    category: "men",
    tagline: "Fresh and energetic fragrance.",
    description:
      "Suitable for active and confident individuals, Apple is a fresh, energetic fragrance built for movement — sharp, clean, and self-assured.",
    notes: {
      top: ["Green Apple", "Bergamot"],
      heart: ["Geranium", "Lavender"],
      base: ["Cedarwood", "Musk"],
    },
    price: 6800,
    size: "100ml",
    accent: "#9C2F4F",
    image: "https://images.pexels.com/photos/30232707/pexels-photo-30232707.jpeg?auto=compress&cs=tinysrgb&w=800",
  },
  {
    slug: "chocolate",
    name: "Chocolate",
    category: "men",
    tagline: "Rich, warm, and bold scent.",
    description:
      "A rich, warm, and bold scent that creates a strong and memorable impression — Chocolate is for the man who doesn't enter a room quietly.",
    notes: {
      top: ["Cacao", "Black Pepper"],
      heart: ["Tobacco", "Cinnamon"],
      base: ["Patchouli", "Amber Wood"],
    },
    price: 8200,
    size: "100ml",
    accent: "#7A2238",
    image: "https://images.pexels.com/photos/17978253/pexels-photo-17978253.jpeg?auto=compress&cs=tinysrgb&w=800",
  },
  {
    slug: "vanilla",
    name: "Vanilla",
    category: "men",
    tagline: "Smooth, comforting, and refined fragrance.",
    description:
      "Perfect for both casual and formal occasions, Vanilla is smooth, comforting, and refined — an everyday signature with quiet depth.",
    notes: {
      top: ["Bergamot", "Cardamom"],
      heart: ["Vanilla Orchid", "Tonka Bean"],
      base: ["Sandalwood", "Musk"],
    },
    price: 7600,
    size: "100ml",
    accent: "#B23A5C",
    image: "/vanilla-product.jpg",
  },
];

export function getProductBySlug(slug: string): Product | undefined {
  return products.find((p) => p.slug === slug);
}

export function getRelatedProducts(current: Product, count = 3): Product[] {
  return products
    .filter((p) => p.category === current.category && p.slug !== current.slug)
    .slice(0, count);
}
