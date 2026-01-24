import { useState } from "react"
import { products } from "./data/products"
import ProductCard from "./components/ProductCard"
import Cart from "./components/Cart"
import CartButton from "./components/CartButton"

export default function App() {
  const [cartOpen, setCartOpen] = useState(false)

  return (
    <div className="min-h-screen bg-black text-white">

      <section className="max-w-6xl mx-auto px-6 py-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
          {products.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>

      <CartButton onClick={() => setCartOpen(true)} />
      {cartOpen && <Cart onClose={() => setCartOpen(false)} />}
    </div>
  )
}
