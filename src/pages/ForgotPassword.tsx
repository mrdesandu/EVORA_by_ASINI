import { useState, type FormEvent } from "react";
import { Link, useNavigate } from "react-router-dom";
import AuthLayout, { AuthInput } from "../components/AuthLayout";

export default function ForgotPassword() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [sent, setSent] = useState(false);

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    setSent(true);
    setTimeout(() => {
      navigate("/reset-password");
    }, 1500);
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
        <div className="flex flex-col items-center gap-3 py-4 text-center">
          <p className="font-body text-xs text-cream/95 leading-relaxed">
            Reset link has been sent to <span className="font-medium text-white">{email}</span>.
          </p>
          <p className="font-body text-[0.68rem] text-cream/70 animate-pulse">
            Redirecting to confirm password...
          </p>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
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
