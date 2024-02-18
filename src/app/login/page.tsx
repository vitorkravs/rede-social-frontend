"use client";

import axios from "axios";
import Link from "next/link";
import { useState } from "react";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e: any) => {
    e.preventDefault();
    axios
      .post("http://localhost:8000/api/auth/login", { email, password })
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <main className="bg-[url('https://static.vecteezy.com/ti/vetor-gratis/p1/9982196-fundo-abstrato-botanico-para-paginas-da-web-banners-com-folhas-e-salpicos-fundo-editavel-vetor.jpg')] bg-no-repeat bg-cover flex min-h-screen flex-col items-center justify-center">
      <form className="flex flex-col bg-white px-6 py-14 rounded-2xl gap-11 text-gray-600 w-1/4">
        <h1 className="font-bold text-2x1 text-center">Login</h1>
        <div className="flex flex-col justify-between items-start">
          <label htmlFor="email">Email:</label>
          <input
            type="text"
            id="email"
            onChange={(e) => setEmail(e.currentTarget.value)}
            placeholder="Digite seu e-mail"
            className="border-gray-400 border-b w-full focus-visible:border-gray-700 focus-visible:boder-b focus-visible:outline-none"
          />
        </div>
        <div className="flex flex-col justify-between items-start">
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            onChange={(e) => setPassword(e.currentTarget.value)}
            placeholder="Digite sua senha"
            className="border-gray-400 border-b w-full focus-visible:border-gray-700 focus-visible:boder-b focus-visible:outline-none"
          />
        </div>
        <button
          className="bg-green-600 py-3  font-bold text-white rounded-lg hover:bg-green-800"
          onClick={(e) => handleLogin(e)}
        >
          Entrar
        </button>
        <Link href="/register" className="text-center underline">
          Cadastre-se
        </Link>
      </form>
    </main>
  );
};

export default Login;
