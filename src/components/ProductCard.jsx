import { useState } from "react"
import { useCart } from "../context/CartContext"

export default function ProductCard({ product }) {
  const [showModel, setShowModel] = useState(false)
  const { addToCart } = useCart()

  return (
    <div className="border border-white/10 overflow-hidden">

      <div className="relative h-[420px]">
        <img
          src={showModel ? product.images.model : product.images.product}
          alt={product.name}
          className="absolute inset-0 w-full h-full object-cover"
        />

        <button onClick={() => setShowModel(false)} className="absolute bottom-4 left-4 bg-black/70 w-10 h-10 rounded-full text-xl">
          ‹
        </button>

        <button onClick={() => setShowModel(true)} className="absolute bottom-4 right-4 bg-black/70 w-10 h-10 rounded-full text-xl">
          ›
        </button>
      </div>

      <div className="p-6 text-center">
        <h4 className="text-sm uppercase tracking-widest">{product.name}</h4>

        <p className="text-xs text-white/50 mt-2">
          {product.brand} · {product.material} · {product.size}
        </p>

        <p className="mt-4 text-lg font-semibold">{product.price}</p>

        <button
          onClick={() => addToCart(product)}
          className="mt-6 w-full border border-white py-3 text-xs uppercase tracking-[0.3em] hover:bg-white hover:text-black transition"
        >
          Adicionar ao carrinho
        </button>
      </div>
    </div>
  )
}
