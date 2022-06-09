import React from 'react'
import { ListGroup } from 'react-bootstrap'
import { States } from '../Context/Context'

const Cart = () => {
  const {
    state: { cart },
    dispatch,
  } = States()

  console.log('====================================')
  console.log(cart)
  console.log('====================================')

  return (
    <>
      <section className='cartBody'>
        <div className='cartProducts'>
          <ListGroup>
            {cart.map((el) => {
              return <span>{el.duckName}</span>
            })}
          </ListGroup>
        </div>
        <div className='cartSummary'></div>
      </section>
    </>
  )
}

export default Cart
