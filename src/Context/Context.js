import React, { createContext, useContext, useReducer, useState } from 'react'
import { context } from 'react-three-fiber'
import { Data } from '../Data/DummyData'
import { AllStates } from './AllStates'
import { reducer } from './Reducer'

const CreateContext = React.createContext()

const Context = ({ children }) => {
  //States
  const [page, setPage] = useState(0)
  const [amountOfElements, setAmountOfElements] = useState(6)

  //Reducer
  const [state, dispatch] = useReducer(reducer, {
    products: Data,
    cart: [],
    allStates: {
      page: 0,
      amountOfElements: 6,
    },
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
