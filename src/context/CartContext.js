import React from 'react'

const CartContext = React.createContext({
  cartList: [],
  addCartItem: () => {},
  deleteCartItem: () => {},
  changeItemQty: () => {},
  emptyCart: () => {},
})

export default CartContext
