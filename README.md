# EVORA — Perfume E-Commerce Website

Built with React + TypeScript + Tailwind CSS v4 + React Router.

## Getting started

```bash
npm install
npm run dev
```

Open http://localhost:5173

## Build for production

```bash
npm run build
```

## Pages

- `/` — Home
- `/shop` — Product catalog (filter by Women's/Men's, search, sort)
- `/product/:slug` — Product detail (e.g. /product/lotus)
- `/cart` — Shopping cart
- `/checkout` — Checkout (shipping + payment)
- `/about` — About Us
- `/sign-in`, `/register`, `/forgot-password`, `/reset-password` — Auth screens

## Structure

- `src/data/products.ts` — all 8 perfumes (name, price, notes, description)
- `src/context/CartContext.tsx` — cart state (add/remove/update quantity)
- `src/components/` — Navbar, Footer, Logo, ProductCard, AuthLayout
- `src/pages/` — one file per route
- `src/index.css` — design tokens (colors, fonts) via Tailwind `@theme`

## Design tokens

| Token | Value |
|---|---|
| `--color-rose` | #C9416A (primary) |
| `--color-rose-soft` | #E8A4B8 |
| `--color-blush` | #F7DCE2 |
| `--color-cream` | #FBF3EC (background) |
| `--color-ink` | #221B1C (text) |
| Display font | Playfair Display |
| Body font | Jost |

## Known gaps / next steps

- No backend yet — sign-in, register, and checkout submit handlers are
  placeholders (they navigate but don't persist anything). Wire up an API
  or service like Supabase/Firebase when ready.
- Product images are gradient placeholders, not real photography. Drop
  real perfume photos into `src/assets/` and swap them into `ProductCard.tsx`
  and `ProductDetail.tsx` when available.
- Reviews on the product page are sample/static data.
