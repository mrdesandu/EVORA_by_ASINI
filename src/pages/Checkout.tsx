import { useState, type FormEvent } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useCart, getShippingFee } from "../context/CartContext";

type PaymentMethod = "card" | "cod";

interface FormState {
  fullName: string;
  email: string;
  phone: string;
  address: string;
  city: string;
  postalCode: string;
}

const initialForm: FormState = {
  fullName: "",
  email: "",
  phone: "",
  address: "",
  city: "",
  postalCode: "",
};

export default function Checkout() {
  const { items, subtotal, clearCart } = useCart();
  const navigate = useNavigate();
  const [form, setForm] = useState<FormState>(initialForm);
  const [payment, setPayment] = useState<PaymentMethod>("cod");
  const [placing, setPlacing] = useState(false);

  if (items.length === 0) return <Navigate to="/cart" replace />;

  const shipping = getShippingFee(subtotal);
  const total = subtotal + shipping;

  function update<K extends keyof FormState>(key: K, value: FormState[K]) {
    setForm((f) => ({ ...f, [key]: value }));
  }

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    setPlacing(true);
    // Simulated order placement — no backend wired yet.
    setTimeout(() => {
      clearCart();
      navigate("/", { state: { orderPlaced: true } });
    }, 900);
  }

  return (
    <div>
      <Navbar />

      <section className="mx-auto max-w-5xl px-6 sm:px-10 py-12 sm:py-16">
        <span className="eyebrow">Almost There</span>
        <h1 className="font-display text-3xl sm:text-4xl text-ink mt-2 mb-10">Checkout</h1>

        <form onSubmit={handleSubmit} className="grid sm:grid-cols-[1fr_320px] gap-10">
          <div className="flex flex-col gap-8">
            {/* Shipping details */}
            <fieldset>
              <legend className="font-display text-lg text-ink mb-4">Shipping Details</legend>
              <div className="grid sm:grid-cols-2 gap-4">
                <CheckoutInput label="Full Name" value={form.fullName} onChange={(v) => update("fullName", v)} />
                <CheckoutInput label="Email" type="email" value={form.email} onChange={(v) => update("email", v)} />
                <CheckoutInput label="Phone Number" type="tel" value={form.phone} onChange={(v) => update("phone", v)} />
                <CheckoutInput label="City" value={form.city} onChange={(v) => update("city", v)} />
                <CheckoutInput
                  label="Delivery Address"
                  value={form.address}
                  onChange={(v) => update("address", v)}
                  full
                />
                <CheckoutInput label="Postal Code" value={form.postalCode} onChange={(v) => update("postalCode", v)} />
              </div>
            </fieldset>

            {/* Payment method */}
            <fieldset>
              <legend className="font-display text-lg text-ink mb-4">Payment Method</legend>
              <div className="flex flex-col gap-3">
                <PaymentOption
                  label="Cash on Delivery"
                  description="Pay with cash when your order arrives."
                  selected={payment === "cod"}
                  onSelect={() => setPayment("cod")}
                />
                <PaymentOption
                  label="Card Payment"
                  description="Pay securely now with a debit or credit card."
                  selected={payment === "card"}
                  onSelect={() => setPayment("card")}
                />
              </div>
            </fieldset>
          </div>

          {/* Order summary */}
          <aside className="bg-blush rounded-3xl p-6 sm:p-7 self-start sm:sticky sm:top-24">
            <h2 className="font-display text-lg text-ink mb-5">Order Summary</h2>

            <ul className="flex flex-col gap-3 mb-5">
              {items.map(({ product, quantity }) => (
                <li key={product.slug} className="flex justify-between font-body text-sm text-ink/80">
                  <span>{product.name} × {quantity}</span>
                  <span>Rs {(product.price * quantity).toLocaleString()}</span>
                </li>
              ))}
            </ul>

            <div className="flex flex-col gap-2 font-body text-sm text-ink/80 border-t border-taupe-light/50 pt-4">
              <div className="flex justify-between">
                <span>Subtotal</span>
                <span>Rs {subtotal.toLocaleString()}</span>
              </div>
              <div className="flex justify-between">
                <span>Shipping</span>
                <span>{shipping === 0 ? "Free" : `Rs ${shipping.toLocaleString()}`}</span>
              </div>
            </div>

            <div className="flex justify-between font-display text-lg text-ink mt-5 pt-4 border-t border-taupe-light/50">
              <span>Total</span>
              <span>Rs {total.toLocaleString()}</span>
            </div>

            <button type="submit" disabled={placing} className="btn-primary w-full mt-6 disabled:opacity-60">
              {placing ? "Placing Order…" : "Place Order"}
            </button>
          </aside>
        </form>
      </section>

      <Footer />
    </div>
  );
}

function CheckoutInput({
  label,
  type = "text",
  value,
  onChange,
  full = false,
}: {
  label: string;
  type?: string;
  value: string;
  onChange: (v: string) => void;
  full?: boolean;
}) {
  return (
    <label className={`flex flex-col gap-1.5 ${full ? "sm:col-span-2" : ""}`}>
      <span className="font-body text-xs text-taupe">{label}</span>
      <input
        type={type}
        required
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="rounded-xl border border-taupe-light bg-cream px-4 py-2.5 text-sm font-body outline-none focus-visible:ring-2 focus-visible:ring-rose/40"
      />
    </label>
  );
}

function PaymentOption({
  label,
  description,
  selected,
  onSelect,
}: {
  label: string;
  description: string;
  selected: boolean;
  onSelect: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onSelect}
      className={`text-left rounded-2xl border px-5 py-4 transition-colors ${
        selected ? "border-rose bg-blush" : "border-taupe-light hover:border-rose/60"
      }`}
    >
      <span className="flex items-center gap-3">
        <span
          className={`w-4 h-4 rounded-full border-2 flex items-center justify-center ${
            selected ? "border-rose" : "border-taupe-light"
          }`}
        >
          {selected && <span className="w-2 h-2 rounded-full bg-rose" />}
        </span>
        <span className="font-body text-sm font-medium text-ink">{label}</span>
      </span>
      <span className="font-body text-xs text-taupe block mt-1 ml-7">{description}</span>
    </button>
  );
}
