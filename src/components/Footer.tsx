import { Link } from "react-router-dom";
import Logo from "./Logo";

export default function Footer() {
  return (
    <footer className="bg-rose petal-divider mt-24">
      <div className="mx-auto max-w-6xl px-6 py-12 flex flex-col md:flex-row items-center justify-between gap-8 text-cream">
        
        {/* Left Column: Crest Medallion */}
        <div className="flex items-center justify-center md:justify-start">
          <Link to="/" aria-label="EVORA home">
            <Logo variant="crest" className="w-18 h-18 drop-shadow-sm hover:scale-105 transition-transform duration-200" />
          </Link>
        </div>

        {/* Center Column: Copyright and Legal */}
        <div className="flex flex-col items-center justify-center text-center gap-2">
          <p className="font-body text-[0.68rem] tracking-[0.12em] uppercase text-cream/80">
            2026 LENS DISTORTIONS, LLC. ALL RIGHTS RESERVED.
          </p>
          <div className="flex items-center gap-2 font-body text-[0.68rem] tracking-[0.12em] uppercase text-cream/70">
            <span className="hover:text-cream cursor-pointer transition-colors">License</span>
            <span>•</span>
            <span className="hover:text-cream cursor-pointer transition-colors">Terms</span>
            <span>•</span>
            <span className="hover:text-cream cursor-pointer transition-colors">Privacy</span>
          </div>
        </div>

        {/* Right Column: Text Wordmark and Slogan */}
        <div className="flex flex-col items-center md:items-end text-center md:text-right gap-1">
          <span className="font-display tracking-[0.25em] text-2xl font-light text-cream">
            EVORA
          </span>
          <span className="font-body tracking-[0.18em] text-[0.55rem] uppercase text-cream/90">
            Inspired By Nature, Crafted For You
          </span>
        </div>

      </div>
    </footer>
  );
}
