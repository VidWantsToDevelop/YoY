import React from 'react'

const reducer = (state, action) => {
  switch (action.type) {
    case 'CART_ADD':
      return {
        ...state,
        cart: [...state.cart, { ...action.payload, qty: action.payload.qty }],
      }

    case 'ADD_ITEM':
      return {
        ...state,
        cart: state.cart.filter((e) =>
          e.id === action.payload.id
            ? (e.qty = e.qty + action.payload.qty)
            : e.qty
        ),
      }

    case 'DELETE_ITEM':
      return {
        ...state,
        cart: state.cart.filter((e) =>
          e.id === action.payload.id
            ? (e.qty = e.qty - action.payload.qty)
            : e.qty
        ),
      }

    case 'CART_REMOVE':
      return {
        ...state,
        cart: state.cart.filter((c) => c.id !== action.payload.id),
      }

    case 'SET_PAGE':
      console.log('====================================')
      console.log('triggered')
      console.log('====================================')
      return {
        ...state,
        allStates: { ...state.allStates, page: action.payload },
      }

    default:
      return state
  }
}

export { reducer }
