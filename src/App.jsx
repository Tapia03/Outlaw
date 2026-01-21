import { useState } from "react"
import { products } from "./data/products"
import ProductCard from "./components/ProductCard"

export default function App() {
  const [brand, setBrand] = useState("Todas")
  const [size, setSize] = useState("Todos")
  const [material, setMaterial] = useState("Todos")

  const filteredProducts = products.filter(product => {
    return (
      (brand === "Todos" || product.brand === brand) &&
      (size === "Todos" || product.size === size) &&
      (material === "Todos" || product.material === material)
    )
  })

  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden">

      {/* HEADER */}
      <header className="border-b border-white/10">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-6 flex justify-between items-center">
          <h1 className="text-lg font-semibold tracking-[0.2em] sm:tracking-[0.3em]">
            OUTLAW
          </h1>

          <a
            href="https://wa.me/5553999616338"
            target="_blank"
            className="text-[10px] sm:text-xs uppercase tracking-[0.25em] border border-white/20 px-4 sm:px-5 py-2 hover:bg-white hover:text-black transition"
          >
            Contato
          </a>
        </div>
      </header>

      {/* HERO */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 py-20 sm:py-24 text-center">
        <h2 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight">
          Camisetas masculinas
        </h2>

        <p className="mt-6 sm:mt-8 text-white/60 max-w-xl mx-auto text-base sm:text-lg">
          Minimalismo. Qualidade. Atitude.
        </p>
      </section>

      {/* FILTROS */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 mb-16">
        <div className="flex justify-center">
          <div className="flex flex-wrap justify-center gap-6 items-end">

            {/* MARCA */}
            <div className="flex flex-col items-center gap-1">
              <span className="text-[10px] uppercase tracking-[0.35em] text-white/50">
                Marca
              </span>

              <select
                className="bg-black border border-white/20 px-2 py-1 text-[11px] tracking-wider focus:outline-none w-[110px] sm:w-[135px] text-center"
                value={brand}
                onChange={e => setBrand(e.target.value)}
              >
                <option>Todos</option>
                <option>Nike</option>
                <option>Adidas</option>
                <option>Hugo Boss</option>
                <option>Tommy Hilfiger</option>
                <option>Lacoste</option>
                <option>Armani</option>
                <option>Oakley</option>
                <option>New Balance</option>
                <option>Hurley</option>
              </select>
            </div>

            {/* TAMANHO */}
            <div className="flex flex-col items-center gap-1">
              <span className="text-[10px] uppercase tracking-[0.35em] text-white/50">
                Tamanho
              </span>

              <select
                className="bg-black border border-white/20 px-2 py-1 text-[11px] tracking-wider focus:outline-none w-[80px] sm:w-[90px] text-center"
                value={size}
                onChange={e => setSize(e.target.value)}
              >
                <option>Todos</option>
                <option>P</option>
                <option>M</option>
                <option>G</option>
                <option>GG</option>
              </select>
            </div>

            {/* TIPO */}
            <div className="flex flex-col items-center gap-1">
              <span className="text-[10px] uppercase tracking-[0.35em] text-white/50">
                Tipo
              </span>

              <select
                className="bg-black border border-white/20 px-2 py-1 text-[11px] tracking-wider focus:outline-none w-[95px] sm:w-[110px] text-center"
                value={material}
                onChange={e => setMaterial(e.target.value)}
              >
                <option>Todos</option>
                <option>Premium</option>
                <option>Tradicional</option>
              </select>
            </div>

          </div>
        </div>
      </section>

      {/* CATÁLOGO */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 pb-28 sm:pb-32">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 sm:gap-10">
          {filteredProducts.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        {filteredProducts.length === 0 && (
          <p className="text-center text-white/50 mt-16 sm:mt-20">
            Nenhum produto encontrado.
          </p>
        )}
      </section>

    </div>
  )
}
