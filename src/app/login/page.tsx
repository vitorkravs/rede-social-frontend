"use client";

import AuthInput from "@/components/AuthInput";
import AuthPage from "@/components/AuthPage";
import axios from "axios";
import Link from "next/link";
import { useState } from "react";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = (e: any) => {
    e.preventDefault();
    axios
      .post("http://localhost:8000/api/auth/login", { email, password })
      .then((res) => {
        console.log(res.data);
        setError("");
      })
      .catch((err) => {
        console.log(err);
        setError(err.response.data.msg);
      });
  };
  return (
    <AuthPage>
      <h1 className="font-bold text-2x1 text-center">Login</h1>
      <AuthInput label="Email:" newState={setEmail} />
      <AuthInput label="Password:" newState={setPassword} isPassword />
      {error.length > 0 && <span className="text-red-600">* {error}</span>}
      <button
        className="bg-green-600 py-3  font-bold text-white rounded-lg hover:bg-green-800"
        onClick={(e) => handleLogin(e)}
      >
        Entrar
      </button>
      <Link href="/register" className="text-center underline">
        Cadastre-se
      </Link>
    </AuthPage>
  );
};

export default Login;
