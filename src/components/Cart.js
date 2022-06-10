import React, { useEffect, useState } from 'react'
import { Button, ListGroup, ToggleButton } from 'react-bootstrap'
import { States } from '../Context/Context'

const Cart = () => {
  const {
    state: { cart },
    dispatch,
  } = States()

  const [total, setTotal] = useState()

  useEffect(() => {
    setTotal(cart.reduce((acc, curr) => acc + Number(curr.price) * curr.qty, 0))
  }, [cart])

  console.log('====================================')
  console.log(cart)
  console.log('====================================')

  return (
    <>
      <section className='cartBody'>
        <div className='cartProducts'>
          <div id='cartProducts-heading'>your cart ({cart.length})</div>
          <ListGroup>
            {cart.map((el) => {
              return (
                <ListGroup.Item key={el.id}>
                  <div className='cartProducts-product'>
                    <div className='product-image'>IMAGE</div>
                    <div className='product-description'>
                      <div className='description-heading'>{el.duckName}</div>
                      <div className='description-chars'>
                        <div className='description-char'>
                          <p>Description:</p> <span>{el.description}</span>
                        </div>
                        <div className='description-char'>
                          <p>Price:</p> <span>{el.price}</span>
                        </div>
                      </div>
                      <div className='description-btns'>
                        <Button
                          onClick={(e) => {
                            console.log('world')
                            dispatch({
                              type: 'CART_REMOVE',
                              payload: el,
                            })
                          }}
                        >
                          Delete
                        </Button>
                      </div>
                    </div>
                    <div className='product-price'>
                      <div className='amountBar'>
                        <div
                          className='amountManage'
                          onClick={(e) => {
                            dispatch({
                              type: 'DELETE_ITEM',
                              payload: { ...el, qty: 1 },
                            })
                          }}
                        >
                          -
                        </div>
                        <div className='product-price-quantity'>{el.qty}</div>
                        <div
                          className='amountManage'
                          onClick={() => {
                            dispatch({
                              type: 'ADD_ITEM',
                              payload: { ...el, qty: 1 },
                            })
                          }}
                        >
                          +
                        </div>
                      </div>
                    </div>
                  </div>
                </ListGroup.Item>
              )
            })}
          </ListGroup>
        </div>
        <div className='cartSummary'>{total}</div>
      </section>
    </>
  )
}

export default Cart
