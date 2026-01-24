import { useState } from "react"

export default function ProductCard({ product }) {
  const [showModel, setShowModel] = useState(false)

  const whatsappMessage = encodeURIComponent(
    `Olá! Tenho interesse na ${product.name}\nTamanho: ${product.size}\nMaterial: Algodão ${product.material}\nPreço: ${product.price}`
  )
  const whatsappLink = `https://wa.me/5553999616338?text=${whatsappMessage}`

  return (
    <div className="border border-white/10 overflow-hidden">
      {/* Imagens */}
      <div
        className="relative h-[420px]"
        onClick={() => setShowModel(!showModel)} // alterna imagem ao tocar
      >
        <img
          src={showModel ? product.images.model : product.images.product}
          alt={`${product.brand} - ${product.name}`}
          className="absolute inset-0 h-full w-full object-cover transition-opacity duration-500"
        />
      </div>

      {/* Conteúdo */}
      <div className="p-6 text-center">
        <h4 className="text-sm uppercase tracking-widest">{product.name}</h4>
        <p className="text-xs text-white/50 mt-2">
          Algodão {product.material} · Tamanho {product.size}
        </p>
        <p className="mt-4 text-lg font-semibold">{product.price}</p>

        <a
          href={whatsappLink}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block mt-6 px-6 py-3 border border-white text-xs uppercase tracking-[0.3em] hover:bg-white hover:text-black transition"
        >
          Comprar no WhatsApp
        </a>
      </div>
    </div>
  )
}
