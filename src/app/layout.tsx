import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/header";
import Footer from "@/components/footer";

export const metadata: Metadata = {
  title: "My SaaS",
  description: "Fazendo meu primeiro SaaS",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-white text-black min-h-screen flex flex-col">
        <Header />
        <main className="flex-1 lg:px-16 px-8 pt-6">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
