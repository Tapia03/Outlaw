import { useCart } from "../context/CartContext"

export default function Cart({ onClose }) {
  const { cartItems, removeFromCart, clearCart, total } = useCart()

  const whatsappMessage = encodeURIComponent(
    `Olá! Gostaria de fazer um pedido:\n\n` +
    cartItems.map(item =>
      `• ${item.name}\n  Tamanho: ${item.size}\n  Material: ${item.material}\n  Quantidade: ${item.quantity}\n`
    ).join("\n") +
    `\nTotal estimado: R$ ${total.toFixed(2).replace(".", ",")}`
  )

  return (
    <div className="fixed inset-0 bg-black/80 flex justify-center items-center z-50">
      <div className="bg-black border border-white/20 w-full max-w-md p-6">

        <h3 className="text-sm uppercase tracking-widest mb-6 text-center">
          Seu carrinho
        </h3>

        <div className="space-y-4">
          {cartItems.map(item => (
            <div key={item.id} className="flex justify-between items-center">
              <div>
                <p className="text-sm">{item.name}</p>
                <p className="text-xs text-white/50">
                  {item.size} · {item.material} · x{item.quantity}
                </p>
              </div>

              <button
                onClick={() => removeFromCart(item.id)}
                className="text-white/50 hover:text-white"
              >
                ✕
              </button>
            </div>
          ))}
        </div>

        <p className="mt-6 text-center font-semibold">
          Total: R$ {total.toFixed(2).replace(".", ",")}
        </p>

        <a
          href={`https://wa.me/5553999616338?text=${whatsappMessage}`}
          target="_blank"
          className="block mt-6 text-center border border-white py-3 uppercase text-xs tracking-widest hover:bg-white hover:text-black transition"
        >
          Finalizar pedido no WhatsApp
        </a>

        <button
          onClick={() => {
            clearCart()
            onClose()
          }}
          className="mt-4 w-full text-xs text-white/50"
        >
          Limpar carrinho
        </button>

        <button
          onClick={onClose}
          className="mt-2 w-full text-xs text-white/50"
        >
          Fechar
        </button>
      </div>
    </div>
  )
}
