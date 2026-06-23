import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useCart, getShippingFee, SHIPPING_THRESHOLD } from "../context/CartContext";

export default function Cart() {
  const { items, removeItem, updateQuantity, subtotal } = useCart();
  const shipping = getShippingFee(subtotal);
  const total = subtotal + shipping;
  const remainingForFreeShip = Math.max(0, SHIPPING_THRESHOLD - subtotal);

  return (
    <div>
      <Navbar />

      <section className="mx-auto max-w-5xl px-6 sm:px-10 py-12 sm:py-16">
        <span className="eyebrow">Your Bag</span>
        <h1 className="font-display text-3xl sm:text-4xl text-ink mt-2 mb-10">Shopping Cart</h1>

        {items.length === 0 ? (
          <div className="text-center py-20">
            <p className="font-display text-xl text-ink">Your cart is empty.</p>
            <p className="font-body text-sm text-taupe mt-2 mb-7">
              Find a fragrance that feels like you.
            </p>
            <Link to="/shop" className="btn-primary inline-block">
              Browse the Collection
            </Link>
          </div>
        ) : (
          <div className="grid sm:grid-cols-[1fr_320px] gap-10">
            {/* Items */}
            <ul className="flex flex-col gap-6">
              {items.map(({ product, quantity }) => (
                <li
                  key={product.slug}
                  className="flex gap-4 sm:gap-6 items-center border-b border-taupe-light/40 pb-6"
                >
                  <Link
                    to={`/product/${product.slug}`}
                    className="w-20 h-24 sm:w-24 sm:h-28 rounded-2xl shrink-0 overflow-hidden relative"
                  >
                    <img
                      src={product.image}
                      alt={product.name}
                      className="absolute inset-0 w-full h-full object-cover"
                    />
                  </Link>

                  <div className="flex-1">
                    <Link to={`/product/${product.slug}`}>
                      <h3 className="font-display text-lg text-ink">{product.name}</h3>
                    </Link>
                    <p className="font-body text-xs text-taupe mt-1">{product.size}</p>
                    <p className="font-body text-sm text-rose mt-1">
                      Rs {product.price.toLocaleString()}
                    </p>

                    <div className="flex items-center gap-3 mt-3">
                      <div className="flex items-center border border-taupe-light rounded-full overflow-hidden">
                        <button
                          onClick={() => updateQuantity(product.slug, quantity - 1)}
                          className="w-7 h-7 text-rose font-body hover:bg-blush transition-colors"
                          aria-label={`Decrease ${product.name} quantity`}
                        >
                          −
                        </button>
                        <span className="w-8 text-center font-body text-xs">{quantity}</span>
                        <button
                          onClick={() => updateQuantity(product.slug, quantity + 1)}
                          className="w-7 h-7 text-rose font-body hover:bg-blush transition-colors"
                          aria-label={`Increase ${product.name} quantity`}
                        >
                          +
                        </button>
                      </div>

                      <button
                        onClick={() => removeItem(product.slug)}
                        className="font-body text-xs text-taupe hover:text-rose underline transition-colors"
                      >
                        Remove
                      </button>
                    </div>
                  </div>

                  <span className="font-body text-sm text-ink shrink-0">
                    Rs {(product.price * quantity).toLocaleString()}
                  </span>
                </li>
              ))}
            </ul>

            {/* Summary */}
            <aside className="bg-blush rounded-3xl p-6 sm:p-7 self-start">
              <h2 className="font-display text-lg text-ink mb-5">Order Summary</h2>

              <div className="flex flex-col gap-2 font-body text-sm text-ink/80">
                <div className="flex justify-between">
                  <span>Subtotal</span>
                  <span>Rs {subtotal.toLocaleString()}</span>
                </div>
                <div className="flex justify-between">
                  <span>Shipping</span>
                  <span>{shipping === 0 ? "Free" : `Rs ${shipping.toLocaleString()}`}</span>
                </div>
                {remainingForFreeShip > 0 && (
                  <p className="text-xs text-rose mt-1">
                    Add Rs {remainingForFreeShip.toLocaleString()} more for free shipping.
                  </p>
                )}
              </div>

              <div className="flex justify-between font-display text-lg text-ink mt-5 pt-4 border-t border-taupe-light/50">
                <span>Total</span>
                <span>Rs {total.toLocaleString()}</span>
              </div>

              <Link to="/checkout" className="btn-primary w-full text-center block mt-6">
                Proceed to Checkout
              </Link>
              <Link
                to="/shop"
                className="font-body text-xs text-taupe hover:text-rose text-center block mt-4 underline"
              >
                Continue Shopping
              </Link>
            </aside>
          </div>
        )}
      </section>

      <Footer />
    </div>
  );
}
