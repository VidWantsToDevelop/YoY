import React, { createContext, useContext, useReducer } from 'react'
import { context } from 'react-three-fiber'
import { Data } from '../Data/DummyData'
import { reducer } from './Reducer'

const CreateContext = React.createContext()

const Context = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, {
    products: Data,
    cart: [],
  })

  return (
    <CreateContext.Provider value={{ state, dispatch }}>
      {children}
    </CreateContext.Provider>
  )
}

export default Context

export const States = () => {
  return useContext(CreateContext)
}
