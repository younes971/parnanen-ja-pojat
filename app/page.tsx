import { client } from '../sanity'
import { urlFor } from '../lib/image'
import Image from 'next/image'

interface Product {
  _id: string
  name: string
  price: number
  description: string
  image?: {
    asset?: {
      _ref: string
      _type: string
    }
  }
}

const query = `*[_type == "product"]{
  _id,
  name,
  price,
  description,
  image
}`

export default async function Home() {
  const products: Product[] = await client.fetch(query)

  return (
    <div style={{ background: "#f5f5f5", minHeight: "100vh" }}>

      {/* HEADER */}
      <header style={{ textAlign: "center", padding: "60px 20px", background: "white" }}>
        <h1 style={{ fontSize: 52, margin: 0 }}>
          Pärnänen & Pojat
        </h1>
        <p style={{ fontSize: 18, color: "#666" }}>
          Premium Typewriters Since 1952
        </p>
      </header>

      {/* PRODUCTS */}
      <main style={{ maxWidth: 1100, margin: "0 auto", padding: 40 }}>
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
          gap: 20
        }}>

          {products.map((p) => (
            <div key={p._id} style={{
              background: "white",
              padding: 20,
              borderRadius: 12,
              boxShadow: "0 4px 10px rgba(0,0,0,0.08)"
            }}>

              {/* IMAGE */}
              {p.image && (
                <Image
                  src={urlFor(p.image).width(400).url()}
                  alt={p.name}
                  width={400}
                  height={200}
                  style={{
                    width: "100%",
                    height: 200,
                    objectFit: "cover",
                    borderRadius: 10,
                    marginBottom: 12
                  }}
                />
              )}

              <h2>{p.name}</h2>

              <p style={{ fontSize: 22, color: "#2563eb", fontWeight: "bold" }}>
                €{p.price}
              </p>

              <p style={{ color: "#555" }}>
                {p.description}
              </p>

            </div>
          ))}

        </div>
      </main>

    </div>
  )
}