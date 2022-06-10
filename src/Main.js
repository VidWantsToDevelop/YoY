import React, { Suspense, useRef, useState } from 'react'
import Header from './components/header'
import { CanvasArea } from './components/Canvas'

import Modal from './components/Modal'
import { Data } from './Data/DummyData'
import { Notification } from './components/Notification'
import { States } from './Context/Context'
import styles from './App.scss'

import { Html, OrbitControls } from '@react-three/drei'

const Main = () => {
  const { state } = States()

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
        {state.products.map((el, index) => {
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
    </main>
  )
}

export default Main
