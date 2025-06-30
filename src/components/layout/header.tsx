"use client";

import A from "../Links/A";
import Link from "next/link";
import { useState } from "react";
import StockFlow from "../Links/StockFlow";
export default function Header() {
  const [isOpen, setOpen] = useState(false);

  return (
    <header className="flex justify-between p-3 lg:p-6">
      <StockFlow></StockFlow>

      <div className="flex items-center space-x-3">
        <nav className="flex  space-x-3">
          <div className="flex space-x-3  items-center ">
            <div className="hidden lg:flex">
              <A href="/Funcionalidades">Funcionalidades</A>
              <A href="/Precos">Preços</A>
              <A href="/login">Fazer login</A>
            </div>

            <Link
              href="/cadastro"
              className="bg-blue-600 px-1 py-1 text-white rounded hover:bg-blue-700"
            >
              Usar StockFlow de graça
            </Link>
          </div>
        </nav>
        <div
          onClick={() => setOpen(!isOpen)}
          className="flex flex-col justify-between w-6 h-5 cursor-pointer lg:hidden"
        >
          <span className="h-0.5 w-full bg-gray-500"></span>
          <span className="h-0.5 w-full bg-gray-500"></span>
          <span className="h-0.5 w-full bg-gray-500"></span>
        </div>
        {isOpen && (
          <div className="fixed top-0 right-0 w-64 h-full bg-white shadow-lg ">
            <div>
              <span onClick={() => setOpen(!isOpen)}>X</span>
            </div>
            <div className="flex flex-col">
              <A className="focus:text-blue-500" href="/Funcionalidades">
                Funcionalidades
              </A>
              <A className="focus:text-blue-500" href="Precos">
                Preços
              </A>
              <A className="focus:text-blue-500" href="/login">
                Fazer login
              </A>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
