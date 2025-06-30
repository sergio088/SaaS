import React from "react";
import StockFlow from "@/components/Links/StockFlow";
import { AuthProviders } from "../providers/SessionProviders";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <header>
          <StockFlow></StockFlow>
        </header>
        <AuthProviders>{children}</AuthProviders>
      </body>
    </html>
  );
}
