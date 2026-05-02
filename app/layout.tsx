import type { Metadata } from "next";
import "./globals.css";
import Navbar from "./Navbar";

export const metadata: Metadata = {
  title: "Pärnänen & Pojat",
  description: "Vintage typewriter store",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>

        <Navbar />

        {children}

        <footer style={{ textAlign: "center", padding: 30, color: "#777" }}>
          © 2026 Pärnänen & Pojat
        </footer>

      </body>
    </html>
  )
}