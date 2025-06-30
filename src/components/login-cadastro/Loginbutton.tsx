"use client";

import { signIn, signOut, useSession } from "next-auth/react";

export default function LoginGoogle() {
  const { data: session } = useSession();

  if (session) {
    return (
      <div>
        <p>Ola, {session.user?.name}</p>
        {session.user?.image && (
          <img src={session.user?.image} alt="Foto de perfil" />
        )}
        <button type="button" onClick={() => signOut()}>
          sair
        </button>
      </div>
    );
  }

  return (
    <div>
      <button
        type="button"
        className="border w-full border-gray-400 px-4 py-2 rounded-3xl shadow hover:bg-gray-50 "
        onClick={() => signIn("google")}
      >
        <span>Entrar com Google</span>
      </button>
    </div>
  );
}
