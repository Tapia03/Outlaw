import { useState } from "react"
import { products } from "./data/products"
import ProductCard from "./components/ProductCard"

export default function App() {
  const [brand, setBrand] = useState("Todos")
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

      <header className="border-b border-white/10">
        <div className="max-w-6xl mx-auto px-6 py-6 flex justify-between items-center">
          <h1 className="text-lg font-semibold tracking-[0.3em]">
            OUTLAW
          </h1>

          <a
            href="https://wa.me/5553999616338"
            target="_blank"
            className="text-xs uppercase tracking-[0.25em] border border-white/20 px-5 py-2 hover:bg-white hover:text-black transition"
          >
            Contato
          </a>
        </div>
      </header>

      <section className="max-w-6xl mx-auto px-6 py-24 text-center">
        <h2 className="text-4xl md:text-6xl font-extrabold tracking-tight">
          Camisetas masculinas
        </h2>

        <p className="mt-8 text-white/60 max-w-xl mx-auto text-base md:text-lg">
          Minimalismo. Qualidade. Atitude.
        </p>
      </section>

      <section className="max-w-6xl mx-auto px-6 mb-24">
        <div className="flex justify-center">
          <div className="
            flex flex-col gap-6
            sm:flex-row sm:gap-10
            items-center
          ">

            <div className="flex flex-col items-center gap-2 w-full sm:w-auto">
              <span className="text-xs uppercase tracking-[0.35em] text-white/60">
                Marca
              </span>

              <select
                className="
                  bg-black border border-white/20
                  px-4 py-2 text-sm tracking-wider
                  text-center w-full sm:min-w-[220px]
                  transition-all duration-200
                  hover:border-white/60
                  focus:border-white
                  focus:outline-none
                "
                value={brand}
                onChange={e => setBrand(e.target.value)}
              >
                <option value="Todos">Todas</option>
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

            <div className="flex flex-col items-center gap-2 w-full sm:w-auto">
              <span className="text-xs uppercase tracking-[0.35em] text-white/60">
                Tamanho
              </span>

              <select
                className="
                  bg-black border border-white/20
                  px-4 py-2 text-sm tracking-wider
                  text-center w-full sm:min-w-[120px]
                  transition-all duration-200
                  hover:border-white/60
                  focus:border-white
                  focus:outline-none
                "
                value={size}
                onChange={e => setSize(e.target.value)}
              >
                <option value="Todos">Todos</option>
                <option>P</option>
                <option>M</option>
                <option>G</option>
                <option>GG</option>
              </select>
            </div>

            <div className="flex flex-col items-center gap-2 w-full sm:w-auto">
              <span className="text-xs uppercase tracking-[0.35em] text-white/60">
                Tipo
              </span>

              <select
                className="
                  bg-black border border-white/20
                  px-4 py-2 text-sm tracking-wider
                  text-center w-full sm:min-w-[160px]
                  transition-all duration-200
                  hover:border-white/60
                  focus:border-white
                  focus:outline-none
                "
                value={material}
                onChange={e => setMaterial(e.target.value)}
              >
                <option value="Todos">Todos</option>
                <option>Premium</option>
                <option>Tradicional</option>
              </select>
            </div>

            <div className="flex flex-col items-center gap-2 w-full sm:w-auto">
              <span className="opacity-0 text-xs select-none">
                Limpar
              </span>

              <button
                onClick={() => {
                  setBrand("Todos")
                  setSize("Todos")
                  setMaterial("Todos")
                }}
                className="
                  border border-white/30
                  px-6 py-2 text-xs uppercase tracking-[0.35em]
                  transition-all duration-200
                  hover:bg-white hover:text-black
                  w-full sm:w-auto
                "
              >
                Limpar
              </button>
            </div>

          </div>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-6 pb-32">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
          {filteredProducts.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        {filteredProducts.length === 0 && (
          <p className="text-center text-white/50 mt-20">
            Nenhum produto encontrado.
          </p>
        )}
      </section>

    </div>
  )
}
