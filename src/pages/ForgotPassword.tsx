import { useState, type FormEvent } from "react";
import { Link } from "react-router-dom";
import AuthLayout, { AuthInput } from "../components/AuthLayout";

export default function ForgotPassword() {
  const [email, setEmail] = useState("");
  const [sent, setSent] = useState(false);

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    setSent(true);
  }

  return (
    <AuthLayout
      footer={
        <Link to="/register" className="font-body text-xs text-cream/90 hover:text-cream tracking-[0.18em] uppercase transition-colors">
          Register ?
        </Link>
      }
    >
      {sent ? (
        <p className="font-body text-sm text-cream/95 text-center leading-relaxed">
          If an account exists for <span className="font-medium">{email}</span>, a reset link is on its way.
        </p>
      ) : (
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <p className="font-body text-xs text-cream/85 text-center -mt-1 mb-1">
            Enter your email and we'll send you a link to reset your password.
          </p>
          <AuthInput label="E-mail" type="email" value={email} onChange={setEmail} />

          <button 
            type="submit" 
            className="mx-auto mt-4 px-10 py-3 bg-ink text-cream font-body text-xs tracking-[0.18em] uppercase rounded-full hover:bg-ink/85 transition-colors cursor-pointer w-max min-w-[150px] shadow-md"
          >
            Submit
          </button>
        </form>
      )}
    </AuthLayout>
  );
}
