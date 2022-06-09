import React from 'react'

const reducer = (state, action) => {
  switch (action.type) {
    case 'CART_ADD':
      return { ...state, cart: [...state.cart, { ...action.payload, qty: 1 }] }

    case 'CART_REMOVE':
      return {
        ...state,
        cart: state.cart.filter((c) => c.id !== action.payload.id),
      }

    default:
      return state
  }
}

export { reducer }
