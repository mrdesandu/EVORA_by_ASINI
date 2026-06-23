import { Link, NavLink } from "react-router-dom";
import { useState } from "react";
import Logo from "./Logo";
import { useCart } from "../context/CartContext";

const navLinks = [
  { label: "Shop", to: "/shop" },
  { label: "About Us", to: "/about" },
];

export default function Navbar() {
  const { itemCount } = useCart();
  const [open, setOpen] = useState(false);

  const linkClass = ({ isActive }: { isActive: boolean }) =>
    `font-body text-xs tracking-[0.18em] uppercase transition-colors ${
      isActive ? "text-ink font-semibold" : "text-cream/90 hover:text-cream"
    }`;

  return (
    <header className="bg-rose sticky top-0 z-50 shadow-sm">
      <nav className="mx-auto max-w-6xl px-5 sm:px-8 h-16 flex items-center justify-between relative">
        <div className="flex items-center gap-8">
          {navLinks.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              className={({ isActive }) => `${linkClass({ isActive })} ${link.label === "About Us" ? "hidden sm:inline" : ""}`}
            >
              {link.label}
            </NavLink>
          ))}
        </div>

        <Link 
          to="/" 
          aria-label="EVORA home" 
          className="absolute left-1/2 -translate-x-1/2 top-1.5 z-50 transition-transform duration-300 hover:scale-105"
        >
          <Logo variant="crest" className="w-18 h-18 drop-shadow-md" />
        </Link>

        <div className="flex items-center gap-6">
          <NavLink
            to="/cart"
            className={({ isActive }) => `relative ${linkClass({ isActive })}`}
          >
            <span className="hidden sm:inline">Check Out</span>
            <span className="sm:hidden">Cart</span>
            {itemCount > 0 && (
              <span className="absolute -top-2 -right-3 bg-cream text-rose text-[0.65rem] font-bold rounded-full w-4.5 h-4.5 flex items-center justify-center border border-rose/10 shadow-sm animate-pulse">
                {itemCount}
              </span>
            )}
          </NavLink>
          <NavLink
            to="/sign-in"
            className={({ isActive }) => linkClass({ isActive })}
          >
            Sign In
          </NavLink>
          <button
            className="sm:hidden text-cream"
            onClick={() => setOpen((v) => !v)}
            aria-label="Toggle menu"
            aria-expanded={open}
          >
            <span className="block w-5 h-px bg-cream mb-1" />
            <span className="block w-5 h-px bg-cream mb-1" />
            <span className="block w-5 h-px bg-cream" />
          </button>
        </div>
      </nav>

      {open && (
        <div className="sm:hidden bg-rose-dark px-5 py-4 flex flex-col gap-3 border-t border-rose/20">
          <NavLink to="/shop" className={({ isActive }) => linkClass({ isActive })} onClick={() => setOpen(false)}>
            Shop
          </NavLink>
          <NavLink to="/about" className={({ isActive }) => linkClass({ isActive })} onClick={() => setOpen(false)}>
            About Us
          </NavLink>
        </div>
      )}
    </header>
  );
}
