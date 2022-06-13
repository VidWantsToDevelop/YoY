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

  console.log(state['products'])
  const [modalIsShown, setIsShown] = useState(false)
  const [modalModel, setModel] = useState(null)
  const [notifications, setNotifications] = useState([])
  const [page, setPage] = useState(0)
  const [amountOfElements, setAmountOfElements] = useState(6)

  const createNotification = (color, children) =>
    setNotifications([
      ...notifications,
      { color, id: notifications.length, children },
    ])
  console.log(notifications)

  const deleteNotification = (key) => {
    setNotifications(notifications.filter(({ id, color }) => id !== key))
  }

  //Pagination
  const currentPosts = state.products.slice(
    page * amountOfElements,
    page * amountOfElements + amountOfElements
  )
  console.log(currentPosts)

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
      <Pagination>
        <Pagination.First />
        <Pagination.Prev />
        <Pagination.Ellipsis />

        <Pagination.Item
          style={{ display: page ? 'block' : 'none' }}
          onClick={(e) => {
            setPage(page - 1)
          }}
        >
          {page}
        </Pagination.Item>
        <Pagination.Item
          active
          onClick={(e) => {
            paginatorEvents('item', e)
            setPage(page)
          }}
        >
          {page + 1}
        </Pagination.Item>
        <Pagination.Item
          style={{
            display:
              page + 1 < state.products.length / amountOfElements
                ? 'block'
                : 'none',
          }}
          onClick={(e) => {
            paginatorEvents('item', e)
            setPage(page + 1)
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
            paginatorEvents('item', e)
            setPage(page + 2)
          }}
        >
          {page + 3}
        </Pagination.Item>

        <Pagination.Ellipsis />
        <Pagination.Next />
        <Pagination.Last />
      </Pagination>
    </main>
  )
}

//Functions
const paginatorEvents = (type, event) => {
  const currentActive = document.querySelector('.page-item.active')
  switch (type) {
    case 'item':

    default:
      console.log('Log')
  }
}

export default Main
