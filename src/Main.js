import React, { Suspense, useRef, useState } from 'react'
import Header from './components/header'
import { CanvasArea } from './components/Canvas'

import Modal from './components/Modal'
import { Data } from './Data/DummyData'
import { Notification } from './components/Notification'
import { States } from './Context/Context'
import styles from './App.scss'

import { Html, OrbitControls } from '@react-three/drei'
import { Pagination } from 'react-bootstrap'

const Main = () => {
  const { state } = States()

  //Slice pages
  let page = state.allStates.page
  let amountOfElements = state.allStates.amountOfElements
  const currentPosts = state.products.slice(
    page * amountOfElements,
    page * amountOfElements + amountOfElements
  )

  console.log(state['products'])
  const [modalIsShown, setIsShown] = useState(false)
  const [modalModel, setModel] = useState(null)
  const [notifications, setNotifications] = useState([])

  const createNotification = (color, children) =>
    setNotifications([
      ...notifications,
      { color, id: notifications.length, children },
    ])
  console.log(notifications)

  const deleteNotification = (key) => {
    setNotifications(notifications.filter(({ id, color }) => id !== key))
  }

  const modalHandler = (e, duck) => {
    if (e) {
      if (e.target === e.currentTarget) setIsShown(!modalIsShown)
    } else {
      console.log('handler')
      setModel(duck)
      setIsShown(!modalIsShown)
    }
  }

  return (
    <main>
      <Modal
        isShown={modalIsShown}
        duck={modalModel ? modalModel : 1}
        handler={modalHandler}
        createNotification={createNotification}
      />
      {notifications.map(({ id, color, children }) => {
        return (
          <Notification
            key={id}
            color={color}
            deleteMethod={() => deleteNotification(id)}
          >
            <>{children}</>
          </Notification>
        )
      })}
      <div className='canvasArea-div'>
        {currentPosts.map((el, index) => {
          let { id, duckName, description, model, price } = el

          return (
            <CanvasArea
              duckName={duckName}
              model={model}
              handler={modalHandler}
              description={description}
              isModal={false}
              key={id}
              id={id}
              price={price}
              index={index}
              duck={el}
              createNotification={createNotification}
            />
          )
        })}
      </div>
      <Paginator />
    </main>
  )
}

const Paginator = () => {
  const { state, dispatch } = States()

  const setPage = state.allStates.page[1]
  const page = state.allStates.page
  const amountOfElements = state.allStates.amountOfElements

  //Pagination
  const currentPosts = state.products.slice(
    state.allStates.page.page *
      state.allStates.amountOfElements.amountOfElements,
    state.allStates.page.page *
      state.allStates.amountOfElements.amountOfElements +
      state.allStates.amountOfElements.amountOfElements
  )

  return (
    <Pagination>
      <Pagination.First
        onClick={() => {
          dispatch({ type: 'SET_PAGE', payload: 0 })
        }}
      />
      <Pagination.Prev
        onClick={(e) => {
          if (page > 0) {
            dispatch({ type: 'SET_PAGE', payload: page - 1 })
          } else {
            console.log('lower limit')
          }
        }}
      />

      <Pagination.Item
        style={{ display: page ? 'block' : 'none' }}
        onClick={(e) => {
          dispatch({ type: 'SET_PAGE', payload: page - 1 })
        }}
      >
        {page}
      </Pagination.Item>
      <Pagination.Item active>{page + 1}</Pagination.Item>
      <Pagination.Item
        style={{
          display:
            page + 1 < state.products.length / amountOfElements
              ? 'block'
              : 'none',
        }}
        onClick={(e) => {
          dispatch({ type: 'SET_PAGE', payload: page + 1 })
        }}
      >
        {page + 2}
      </Pagination.Item>
      <Pagination.Item
        style={{
          display:
            page + 2 < state.products.length / amountOfElements
              ? 'block'
              : 'none',
        }}
        onClick={(e) => {
          dispatch({ type: 'SET_PAGE', payload: page + 2 })
        }}
      >
        {page + 3}
      </Pagination.Item>

      <Pagination.Next
        onClick={(e) => {
          if (page + 1 < state.products.length / amountOfElements) {
            dispatch({ type: 'SET_PAGE', payload: page + 1 })
          } else {
            console.log('upper limit')
          }
        }}
      />
      <Pagination.Last
        onClick={() => {
          dispatch({
            type: 'SET_PAGE',
            payload: state.products.length / amountOfElements - 1,
          })
        }}
      />
    </Pagination>
  )
}

export default Main
