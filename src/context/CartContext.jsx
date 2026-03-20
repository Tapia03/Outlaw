import { createContext, useContext, useEffect, useState } from "react"

const CartContext = createContext()

// 🔹 pega carrinho salvo
function getInitialCart() {
  const stored = localStorage.getItem("cart")
  return stored ? JSON.parse(stored) : []
}

export function CartProvider({ children }) {
  const [cartItems, setCartItems] = useState(getInitialCart)

  // 🔹 salva sempre que mudar
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cartItems))
  }, [cartItems])

  function addToCart(product) {
    setCartItems(prev => {
      const existing = prev.find(item => item.id === product.id)

      if (existing) {
        return prev.map(item =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        )
      }

      return [...prev, { ...product, quantity: 1 }]
    })
  }

  function removeFromCart(id) {
    setCartItems(prev => prev.filter(item => item.id !== id))
  }

  function clearCart() {
    setCartItems([])
    localStorage.removeItem("cart")
  }

  const total = cartItems.reduce((sum, item) => {
    const price = Number(item.price.replace("R$", "").replace(",", "."))
    return sum + price * item.quantity
  }, 0)

  return (
    <CartContext.Provider value={{
      cartItems,
      addToCart,
      removeFromCart,
      clearCart,
      total
    }}>
      {children}
    </CartContext.Provider>
  )
}

export function useCart() {
  return useContext(CartContext)
}