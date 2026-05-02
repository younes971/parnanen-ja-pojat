import { client } from '../../sanity'
import Image from 'next/image'
import { urlFor } from '../../lib/image'

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

export default async function Products() {
  const products: Product[] = await client.fetch(`*[_type == "product"]{
    _id,
    name,
    price,
    description,
    image
  }`)

  return (
    <div style={{ maxWidth: 1100, margin: "0 auto", padding: 40 }}>
      <h1>Products</h1>

      <div style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
        gap: 20,
        marginTop: 20
      }}>

        {products.map((p) => (
          <div
            key={p._id}
            style={{
              background: "white",
              padding: 20,
              borderRadius: 12,
              boxShadow: "0 4px 10px rgba(0,0,0,0.08)"
            }}
          >

            {/* IMAGE */}
            {p.image && (
              <Image
                src={urlFor(p.image).width(400).url()}
                alt={p.name}
                width={400}
                height={250}
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

            <p style={{
              fontSize: 20,
              color: "#2563eb",
              fontWeight: "bold"
            }}>
              €{p.price}
            </p>

            <p style={{ color: "#555" }}>
              {p.description}
            </p>

          </div>
        ))}

      </div>
    </div>
  )
}