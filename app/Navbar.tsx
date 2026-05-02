'use client'

import Link from "next/link"
import { usePathname } from "next/navigation"

export default function Navbar() {
  const pathname = usePathname()

  return (
    <nav style={{
      display: "flex",
      justifyContent: "space-between",
      padding: "20px 40px",
      borderBottom: "1px solid #eee",
      background: "white"
    }}>
      <div style={{ fontWeight: "bold" }}>
        Pärnänen & Pojat
      </div>

      <div style={{ display: "flex", gap: 20 }}>
        <Link href="/" style={{ fontWeight: pathname === "/" ? "bold" : "normal" }}>
          Home
        </Link>

        <Link href="/products" style={{ fontWeight: pathname === "/products" ? "bold" : "normal" }}>
          Products
        </Link>

        <Link href="/about" style={{ fontWeight: pathname === "/about" ? "bold" : "normal" }}>
          About
        </Link>
      </div>
    </nav>
  )
}