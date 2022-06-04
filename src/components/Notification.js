import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import styles from '../App.scss'
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
  element.className = 'container'
  document.body.appendChild(element)
  console.log(3)
  return element
}

const container = createContainer()

const Notification = ({ color = Color.info, deleteMethod, children }) => {
  return createPortal(
    <div className={`notification ${color}`}>
      {children}
      <button className='closeButton' onClick={deleteMethod}>
        <div>X</div>
      </button>
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
