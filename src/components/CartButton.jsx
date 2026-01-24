import { useCart } from "../context/CartContext"

export default function CartButton({ onClick }) {
  const { cartItems } = useCart()

  if (cartItems.length === 0) return null

  return (
    <button
      onClick={onClick}
      className="fixed bottom-6 right-6 bg-white text-black px-5 py-3 rounded-full shadow-lg uppercase text-xs tracking-widest z-50"
    >
      Carrinho ({cartItems.length})
    </button>
  )
}
