# 🖤 OUTLAW Store

E-commerce minimalista de camisetas masculinas, desenvolvido com React + Vite, com foco em performance, experiência mobile e integração direta com WhatsApp.

---

## 🚀 Tecnologias utilizadas

* React
* Vite
* Tailwind CSS
* JavaScript (ES6+)
* LocalStorage (persistência do carrinho)

---

## 🛍️ Funcionalidades

### 🔹 Catálogo de produtos

* Listagem dinâmica via `products.js`
* Imagens com troca (produto ↔ modelo)
* Layout responsivo (mobile-first)

### 🔹 Filtros inteligentes

* Filtro por:

  * Marca
  * Tamanho
  * Tipo (Premium / Tradicional)
* Aplicação manual via botão (**melhor UX**)
* Botão para limpar filtros

### 🔹 Carrinho de compras

* Adição de produtos
* Controle de quantidade automático
* Remoção de itens
* Limpeza completa do carrinho
* Cálculo automático do total

### 🔹 Persistência de dados

* Carrinho salvo no `localStorage`
* Mantém os produtos mesmo após:

  * F5
  * Fechar o navegador

### 🔹 Checkout via WhatsApp

* Geração automática de mensagem com:

  * Nome do produto
  * Tamanho
  * Material
  * Quantidade
  * Total do pedido
* Redirecionamento direto para o WhatsApp

---

## 📱 Experiência Mobile

* Compatível com Android e iOS
* Correção de comportamento de hover (Safari / iPhone)
* Navegação por toque (setas nas imagens)
* Layout otimizado para telas pequenas

---

## 🎯 Estrutura do projeto

```
src/
 ├─ components/
 │   ├─ ProductCard.jsx
 │   ├─ Cart.jsx
 │   └─ CartButton.jsx
 │
 ├─ context/
 │   └─ CartContext.jsx
 │
 ├─ data/
 │   └─ products.js
 │
 ├─ App.jsx
 ├─ main.jsx
 └─ index.css
```

---

## ⚙️ Como rodar o projeto

```bash
# instalar dependências
npm install

# rodar ambiente local
npm run dev
```

O projeto estará disponível em:

```
http://localhost:5173
```

---

## 🌐 Deploy

O projeto está preparado para deploy na Vercel.

A cada commit:

* build automático
* atualização do site em produção

---

## 📦 Estrutura dos produtos

Exemplo de produto:

```js
{
  id: 1,
  name: "Camiseta Nike - Vermelha",
  brand: "Nike",
  size: "M",
  material: "Premium",
  price: "R$ 54,99",
  images: {
    product: "url",
    model: "url"
  }
}
```

---

## ⚠️ Boas práticas adotadas

* IDs únicos para cada produto
* Não reutilizar IDs removidos
* Separação de responsabilidades (components / context / data)
* Estado global com Context API
* Persistência com localStorage

---

## 🔮 Melhorias futuras

* Sistema de login/admin
* Integração com pagamento online
* Controle de estoque
* Dashboard de pedidos
* Analytics (Google Analytics / Vercel Analytics)
* Favoritos / wishlist

---

## 📞 Contato

As vendas são realizadas diretamente via WhatsApp.

---

## 🧠 Observações

Este projeto foi desenvolvido com foco em:

* simplicidade
* performance
* validação rápida de produto (MVP)

Ideal para lojas que desejam vender sem complexidade de gateway de pagamento inicialmente.
