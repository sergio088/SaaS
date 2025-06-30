"use client";

import Emailinput from "@/components/login-cadastro/input";
import Title1e2 from "@/components/login-cadastro/title1e2";
import LoginGoogle from "@/components/login-cadastro/Loginbutton";
import { useState } from "react";

export default function Login() {
  const [email, setemail] = useState("");

  return (
    <div className="flex items-center justify-center h-screen">
      <div className="lg:w-1/4 space-y-6">
        <Title1e2
          title1="Retome o controle aqui"
          title2="Faça login na sua conta do StockFlow"
        ></Title1e2>

        <LoginGoogle></LoginGoogle>

        <Emailinput onChange={(e) => setemail(e.target.value)}></Emailinput>
        <div>
          <button
            type="button"
            className="bg-blue-500 p-2 text-white w-full rounded hover:bg-blue-600"
          >
            Continuar
          </button>
        </div>
      </div>
    </div>
  );
}
