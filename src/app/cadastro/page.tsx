"use client";

import LoginGoogle from "@/components/login-cadastro/Loginbutton";
import Emailinput from "@/components/login-cadastro/input";
import Title1e2 from "@/components/login-cadastro/title1e2";
import { useRef, useState } from "react";
import ButtonContinuar from "@/components/login-cadastro/buttonContinuar";

export default function Cadastro() {
  const emailref = useRef<HTMLInputElement>(null);
  const [email, setemail] = useState("");

  function Continuar() {
    alert("iu");
  }
  return (
    <div className="flex items-center justify-center h-screen ">
      <div className="space-y-6 lg:w-1/4">
        <Title1e2
          title1="O seu espaço de controle de estoque"
          title2="Crie sua conta no StockFlow"
        ></Title1e2>

        <LoginGoogle></LoginGoogle>

        <Emailinput
          onChange={(e) => setemail(e.target.value)}
          ref={emailref}
        ></Emailinput>
        <div className="space-y-5">
          <ButtonContinuar onClick={Continuar} />
        </div>
      </div>
    </div>
  );
}
