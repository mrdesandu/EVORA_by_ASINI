import { useState, type FormEvent } from "react";
import { Link, useNavigate } from "react-router-dom";
import AuthLayout, { AuthInput } from "../components/AuthLayout";

export default function Register() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    if (password !== confirmPassword) {
      setError("Passwords don't match.");
      return;
    }
    if (password.length < 6) {
      setError("Password should be at least 6 characters.");
      return;
    }
    setError("");
    navigate("/sign-in");
  }

  return (
    <AuthLayout
      footer={
        <Link to="/sign-in" className="font-body text-xs text-cream/90 hover:text-cream tracking-[0.18em] uppercase transition-colors">
          Sign In
        </Link>
      }
    >
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <AuthInput label="Email" type="email" value={email} onChange={setEmail} />
        <AuthInput label="Username" value={username} onChange={setUsername} />
        <AuthInput label="Phone Number" type="tel" value={phone} onChange={setPhone} />
        <AuthInput label="Password" type="password" value={password} onChange={setPassword} showToggle={true} />
        <AuthInput
          label="Confirm Password"
          type="password"
          value={confirmPassword}
          onChange={setConfirmPassword}
          error={error}
        />

        <button 
          type="submit" 
          className="mx-auto mt-4 px-10 py-3 bg-ink text-cream font-body text-xs tracking-[0.18em] uppercase rounded-full hover:bg-ink/85 transition-colors cursor-pointer w-max min-w-[150px] shadow-md"
        >
          Register
        </button>
      </form>
    </AuthLayout>
  );
}
