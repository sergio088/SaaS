import A from "./link";
import Link from "next/link";

export default function Header() {
  return (
    <header className="flex justify-between p-3 lg:p-6">
      <div className="flex items-center space-x-1">
        <span className="bg-blue-600 h-4 w-4 rounded"></span>
        <h1>StockFlow</h1>
      </div>

      <nav className="flex lg:space-x-3 items-center ">
        <A href="/Funcionalidades">Funcionalidades</A>
        <A href="Precos">Preços</A>
        <A href="/login">Fazer login</A>
        <Link
          href="/cadastra-se"
          className="bg-blue-600 px-1 py-1 text-white rounded hover:bg-blue-700"
        >
          Usar StockFlow de graça
        </Link>
      </nav>
    </header>
  );
}
