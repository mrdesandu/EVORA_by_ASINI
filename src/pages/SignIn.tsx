import { useState, type FormEvent } from "react";
import { Link, useNavigate } from "react-router-dom";
import AuthLayout, { AuthInput } from "../components/AuthLayout";

export default function SignIn() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    if (!email || !password) {
      setError("Enter both email and password to sign in.");
      return;
    }
    setError("");
    navigate("/");
  }

  return (
    <AuthLayout
      footer={
        <Link to="/register" className="font-body text-xs text-cream/90 hover:text-cream tracking-[0.18em] uppercase transition-colors">
          Register ?
        </Link>
      }
    >
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <AuthInput label="Email" type="email" value={email} onChange={setEmail} />
        <AuthInput label="Password" type="password" value={password} onChange={setPassword} error={error} />

        <Link
          to="/forgot-password"
          className="font-body text-[0.62rem] text-cream/80 hover:text-cream tracking-[0.12em] uppercase self-end -mt-1 transition-colors"
        >
          Forgot Password?
        </Link>

        <button 
          type="submit" 
          className="mx-auto mt-4 px-10 py-3 bg-ink text-cream font-body text-xs tracking-[0.18em] uppercase rounded-full hover:bg-ink/85 transition-colors cursor-pointer w-max min-w-[150px] shadow-md"
        >
          Sign In
        </button>
      </form>
    </AuthLayout>
  );
}
