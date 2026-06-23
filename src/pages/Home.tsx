import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const featureCards = [
  {
    title: "Beauty of Japanese",
    body: "Inspired by the beauty of Japanese cherry blossoms, Sakura is a soft and delicate fragrance with a light floral aroma. Its graceful scent brings a touch of elegance and femininity, perfect for everyday wear.",
    image: "/sakura.jpg",
    href: "/product/sakura",
  },
  {
    title: "Fresh and elegant fragrance",
    body: "Inspired by the lotus flower, this fresh and elegant fragrance offers a calm, refreshing scent with delicate floral notes, perfect for everyday sophistication.",
    image: "/lotus.jpg",
    href: "/product/lotus",
  },
  {
    title: "Bold fragrance of chocolate",
    body: "Chocolate is a rich and warm fragrance with a smooth, indulgent aroma. Bold and memorable, it delivers a sophisticated scent experience that exudes confidence and charm.",
    image: "/chocolate.jpg",
    href: "/product/chocolate",
  },
];

export default function Home() {
  return (
    <div className="bg-cream min-h-screen">
      <Navbar />

      {/* Hero Banner Section */}
      <section className="relative w-full min-h-[380px] sm:min-h-[480px] md:h-[500px] flex items-center justify-end px-6 sm:px-16 overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <img
            src="/hero.jpg"
            alt="Best perfume collection background"
            className="w-full h-full object-cover object-center"
          />
        </div>

        {/* Floating Content (Right aligned, text centered) */}
        <div className="relative z-10 max-w-xl text-center flex flex-col items-center gap-6 pr-4 sm:pr-8 md:pr-12">
          <h1 className="font-body text-4xl sm:text-5xl md:text-6xl font-semibold text-white leading-tight tracking-wide drop-shadow-md">
            BEST PERFUME<br />COLLECTION FOR YOU
          </h1>
          <Link
            to="/shop"
            className="inline-block px-8 py-3.5 rounded-full bg-[#efa8c5] text-ink font-body text-xs font-semibold tracking-[0.18em] uppercase transition-all duration-300 hover:bg-[#efa8c5]/90 hover:scale-105 shadow-md"
          >
            Explore
          </Link>
        </div>
      </section>

      {/* Feature Cards Section */}
      <section className="mx-auto max-w-6xl px-6 sm:px-10 py-16 sm:py-20">
        <div className="grid sm:grid-cols-3 gap-y-16 gap-x-8">
          {featureCards.map((card) => (
            <Link key={card.title} to={card.href} className="group block text-center">
              {/* Image with overlapping badge */}
              <div className="relative aspect-[5/4] rounded-[2rem] overflow-visible mb-6 shadow-sm transition-transform duration-300 group-hover:-translate-y-1">
                <img
                  src={card.image}
                  alt={card.title}
                  className="absolute inset-0 w-full h-full object-cover rounded-[2rem]"
                  loading="lazy"
                />
                {/* White floating badge */}
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 bg-white text-ink border border-taupe-light/35 shadow-md px-6 py-2.5 rounded-2xl text-[0.7rem] font-semibold tracking-[0.12em] uppercase whitespace-nowrap z-10 transition-transform duration-300 group-hover:scale-105">
                  {card.title}
                </div>
              </div>
              {/* Description */}
              <p className="font-body text-[0.8rem] text-taupe leading-relaxed mt-8 max-w-md mx-auto px-2">
                {card.body}
              </p>
            </Link>
          ))}
        </div>
      </section>

      {/* Section Title */}
      <section className="text-center py-6">
        <h2 className="font-display text-3xl sm:text-4xl text-ink">
          Inspired By Nature, <span className="text-rose">Crafted For You</span>
        </h2>
      </section>

      {/* Category Cards (For Her / For Him) */}
      <section className="mx-auto max-w-6xl px-6 sm:px-10 py-10 sm:py-16">
        <div className="grid sm:grid-cols-2 gap-8">
          <Link
            to="/women"
            className="group relative aspect-[4/5] rounded-[2rem] overflow-hidden flex items-center justify-center shadow-md transition-all duration-300 hover:shadow-lg"
          >
            {/* Background image */}
            <img
              src="/for-her.jpg"
              alt="For Her Collection"
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-ink/30 group-hover:bg-ink/20 transition-colors duration-300" />
            <span className="relative font-display text-4xl sm:text-5xl text-cream tracking-[0.2em] font-light z-10 text-shadow">
              FOR HER
            </span>
          </Link>
          <Link
            to="/men"
            className="group relative aspect-[4/5] rounded-[2rem] overflow-hidden flex items-center justify-center shadow-md transition-all duration-300 hover:shadow-lg"
          >
            {/* Background image */}
            <img
              src="/for-him.jpg"
              alt="For Him Collection"
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-ink/30 group-hover:bg-ink/20 transition-colors duration-300" />
            <span className="relative font-display text-4xl sm:text-5xl text-cream tracking-[0.2em] font-light z-10 text-shadow">
              FOR HIM
            </span>
          </Link>
        </div>
      </section>

      {/* Discover Fragrances Text */}
      <section className="text-center py-6">
        <h2 className="font-display text-2xl sm:text-3xl text-ink tracking-wide">
          Discover exquisite <span className="text-[#A358A8] font-medium uppercase tracking-widest">FRAGRANCES</span> that captivate
        </h2>
      </section>

      <Footer />
    </div>
  );
}
