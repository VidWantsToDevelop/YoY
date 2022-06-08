import React, { useEffect, useState, useRef } from 'react'
import PropTypes from 'prop-types'
import Animations from '../Animations.scss'
import { createPortal } from 'react-dom'

const createContainer = () => {
  const portalId = 'notifyContainer'
  let element = document.getElementById(portalId)
  console.log(element)

  if (element) {
    console.log(2)
    return element
  }

  element = document.createElement('div')
  element.setAttribute('id', portalId)
  element.className = 'containerN'
  document.body.appendChild(element)
  console.log(3)
  return element
}

const container = createContainer()

const Notification = ({ color = Color.info, deleteMethod, children }) => {
  const [closing, setClosing] = useState(false)

  useEffect(() => {
    const timeout = setTimeout(() => setClosing(true), 505000)

    return () => {
      clearTimeout(timeout)
    }
  }, [])

  useEffect(() => {
    if (closing) {
      const timeout = setTimeout(deleteMethod, 300)

      return () => {
        clearTimeout(timeout)
      }
    }
  }, [closing, deleteMethod])

  return createPortal(
    <div className={'notify-container ' + (closing ? 'shrink' : void 0)}>
      <div className={`notification ${color} ` + (closing ? 'out' : 'in')}>
        {children}
        <button
          className='closeButton'
          onClick={async (e) => {
            setClosing(true)
          }}
        >
          <div>X</div>
        </button>
      </div>
    </div>,
    container
  )
}

const Color = {
  info: 'info',
  success: 'success',
  warning: 'warning',
  error: 'error',
}

Notification.propTypes = {
  notificationType: PropTypes.oneOf(Object.keys(Color)),
  children: PropTypes.element,
}

export { Notification, Color }
