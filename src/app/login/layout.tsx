import React from "react";
import { AuthProviders } from "../providers/SessionProviders";
import StockFlow from "@/components/Links/StockFlow";

export default function Rootlayout({
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
