import { type ReactNode, useState } from "react";
import { Link } from "react-router-dom";
import Logo from "./Logo";

export default function AuthLayout({
  children,
  footer,
}: {
  children: ReactNode;
  footer?: ReactNode;
}) {
  return (
    <div className="min-h-screen bg-cream flex items-center justify-center px-4 py-12">
      <div className="w-full max-w-sm bg-rose rounded-[3rem] px-8 py-12 flex flex-col items-center shadow-xl shadow-rose/10">
        <Link to="/" className="flex flex-col items-center gap-2 mb-8 text-center group">
          <Logo variant="crest" className="w-20 h-20 drop-shadow-md transition-transform duration-300 group-hover:scale-105" />
          <span className="font-display tracking-[0.25em] text-2xl text-cream font-light mt-2">
            EVORA
          </span>
          <span className="font-body tracking-[0.18em] text-[0.52rem] uppercase text-cream/90">
            Inspired By Nature, Crafted For You
          </span>
        </Link>

        <div className="w-full flex flex-col gap-4">{children}</div>

        {footer && <div className="mt-8 text-center w-full">{footer}</div>}
      </div>
    </div>
  );
}

export function AuthInput({
  label,
  type = "text",
  value,
  onChange,
  required = true,
  error,
  showToggle = false,
}: {
  label: string;
  type?: string;
  value: string;
  onChange: (v: string) => void;
  required?: boolean;
  error?: string;
  showToggle?: boolean;
}) {
  const [showPassword, setShowPassword] = useState(false);
  const inputType = showToggle ? (showPassword ? "text" : "password") : type;

  return (
    <div className="flex flex-col gap-1 w-full">
      <div className="relative flex items-center w-full">
        <input
          type={inputType}
          placeholder={label.toUpperCase()}
          value={value}
          required={required}
          onChange={(e) => onChange(e.target.value)}
          className="w-full rounded-full bg-white px-5 py-3 text-xs text-ink font-body placeholder:text-ink/35 outline-none focus-visible:ring-2 focus-visible:ring-ink/20 shadow-inner"
        />
        {showToggle && (
          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="absolute right-4 text-ink/40 hover:text-ink/75 transition-colors focus:outline-none"
            aria-label={showPassword ? "Hide password" : "Show password"}
          >
            {showPassword ? (
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.8} stroke="currentColor" className="w-4 h-4">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.98 8.223A10.477 10.477 0 001.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.45 10.45 0 0112 4.5c4.756 0 8.773 3.162 10.065 7.498a10.523 10.523 0 01-4.293 5.774M6.228 6.228L3 3m3.228 3.228l3.65 3.65m7.895 7.895L21 21m-3.228-3.228l-3.65-3.65m0 0a3 3 0 10-4.243-4.243m4.242 4.242L9.88 9.88" />
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.8} stroke="currentColor" className="w-4 h-4">
                <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
            )}
          </button>
        )}
      </div>
      {error && <span className="text-[0.62rem] text-cream bg-rose-dark/30 rounded-lg px-3 py-1 mt-1 text-center">{error}</span>}
    </div>
  );
}
