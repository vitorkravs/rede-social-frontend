"use client";

import AuthInput from "@/components/AuthInput";
import AuthPage from "@/components/AuthPage";
import axios from "axios";

import Link from "next/link";
import { useState } from "react";

const Register = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const [sucess, setSucess] = useState("");

  const handleRegister = (e: any) => {
    e.preventDefault();
    axios
      .post("http://localhost:8000/api/auth/register", {
        username,
        email,
        password,
        confirmPassword,
      })
      .then((res) => {
        console.log(res.data);
        setSucess(res.data.msg);
        setError("");
      })
      .catch((err) => {
        console.log(err);
        setError(err.response.data.msg);
        setSucess("");
      });
  };

  return (
    <AuthPage>
      <h1 className="font-bold text-2x1 text-center">Registre-se</h1>
      <AuthInput label="Username:" newState={setUsername} />
      <AuthInput label="Email:" newState={setEmail} />
      <AuthInput label="Senha:" newState={setPassword} isPassword />
      <AuthInput label="Confirme a sua senha :" newState={setConfirmPassword} />
      {error.length > 0 && <span className="text-red-600">* {error}</span>}
      {sucess.length > 0 && <span className="text-green-600">* {sucess}</span>}
      <button
        className="bg-green-600 py-3  font-bold text-white rounded-lg hover:bg-green-800"
        onClick={(e) => handleRegister(e)}
      >
        Cadastrar-se
      </button>
      <Link href="/login" className="text-center underline">
        Já possui conta?
      </Link>
    </AuthPage>
  );
};

export default Register;
