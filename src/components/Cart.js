import React, { useEffect, useState } from 'react'
import {
  Button,
  Dropdown,
  DropdownButton,
  ListGroup,
  ToggleButton,
} from 'react-bootstrap'
import { CanvasBox } from './Canvas'
import { States } from '../Context/Context'

const Cart = () => {
  const {
    state: { cart },
    dispatch,
  } = States()

  const [total, setTotal] = useState()
  const [shipping, setShipping] = useState(0)

  useEffect(() => {
    setTotal(cart.reduce((acc, curr) => acc + Number(curr.price) * curr.qty, 0))
  }, [cart])

  const taxRate = 0.13

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
                    <div className='product-image'>
                      <CanvasBox duck={el} />
                    </div>
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
        <div className='cartSummary'>
          <h4 id='cartSummary-heading'>summary</h4>
          <div className='cartSummary-subtotal'>
            <div className='subtotal'>
              <h4>subtotal:</h4>
              <h4>${total}</h4>
            </div>
            <div className='subtotal-shipping'>
              <div>
                <h6>estimated shipping & handling</h6>
                <DropdownButton
                  title='Dropdown right'
                  id='dropdown-menu-align-right'
                  onSelect={(j) => {
                    setShipping(Number(j))
                  }}
                >
                  <Dropdown.Item eventKey='0'>free shipping ($0)</Dropdown.Item>
                  <Dropdown.Item eventKey='12.99'>
                    prime shipping ($12.99)
                  </Dropdown.Item>
                  <Dropdown.Divider />
                  <Dropdown.Item eventKey='26.99'>
                    same day ($26.99)
                  </Dropdown.Item>
                </DropdownButton>
              </div>
              <h6>${shipping}</h6>
            </div>
            <div className='subtotal-tax'>
              <h4>tax:</h4>
              <h4>${total * taxRate}</h4>
            </div>
          </div>
          <div className='cartSummary-total'>
            <h4>Total:</h4>
            <h4>${total + total * taxRate + shipping}</h4>
          </div>
          <div className='cartSummary-checkout'>
            <button>
              <span>checkout</span>
            </button>
            <button>
              <span>check out with </span>
              <img
                src='https://s3.cointelegraph.com/storage/uploads/view/3278bdc14c74dd4e85732b776d0e5b1d.png'
                alt='none'
              />
            </button>
          </div>
        </div>
      </section>
    </>
  )
}

export default Cart
