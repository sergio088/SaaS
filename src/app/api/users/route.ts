// import { NextResponse } from "next/server";

// export async function POST(req: Request) {
//   const body = await req.json();

//   const { email, user, senha } = body;
// }
// src/app/api/users/route.ts

import { NextResponse } from "next/server";

export async function POST() {
  return NextResponse.json({ message: "ok" });
}
