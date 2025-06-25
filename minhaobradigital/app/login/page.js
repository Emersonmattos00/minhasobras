"use client";
import { signIn } from "next-auth/react";
import { useState } from "react";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");

  async function handleLogin() {
    await signIn("credentials", { email, password: senha, callbackUrl: "/" });
  }

  return (
    <div>
      <h1>Login</h1>
      <input
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        placeholder="Senha"
        value={senha}
        onChange={(e) => setSenha(e.target.value)}
        type="password"
      />
      <button onClick={handleLogin}>Entrar</button>
    </div>
  );
}
