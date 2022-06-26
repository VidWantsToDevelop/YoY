import React, { useEffect } from 'react'
import { States } from '../Context/Context'
import { Link } from 'react-router-dom'
import { AiOutlineShoppingCart as CartIcon } from 'react-icons/ai'
import { RiDeleteBack2Line } from 'react-icons/ri'
import * as RB from 'react-bootstrap'

export default function Header() {
  const {
    state: { cart },
    dispatch,
  } = States()

  return (
    <header>
      <div className='header-inner'>
        <nav>
          <ul>
            <li>
              <div class='logo logo-holder logo-4'>
                <a href=''>
                  <h3>David</h3>
                  <p>just trying my best</p>
                </a>
              </div>
            </li>
          </ul>
          <div className='cartBtn'>
            <RB.Container>
              <RB.Dropdown>
                <RB.Dropdown.Toggle variant='success'>
                  <CartIcon color={'white'} size={25} />
                  <RB.Badge>{cart.length}</RB.Badge>
                </RB.Dropdown.Toggle>
                <RB.Dropdown.Menu style={{ minWidth: 375 }}>
                  {cart.length ? (
                    cart.map((el) => {
                      return (
                        <div className='cartItem-wrapper' key={el.id}>
                          <div className='cartItem'>
                            <h5>
                              {el.duckName} ({el.qty})
                            </h5>
                            <h5>${el.price * el.qty}</h5>
                            <RiDeleteBack2Line
                              onClick={() => {
                                console.log("'((((((' + ")
                                console.log(cart)
                                dispatch({
                                  type: 'CART_REMOVE',
                                  payload: el,
                                })
                              }}
                            />
                          </div>
                        </div>
                      )
                    })
                  ) : (
                    <span style={{ padding: '25px' }}>Cart is empty</span>
                  )}
                  {cart.length ? <button>Proceed to checkout</button> : void 1}
                </RB.Dropdown.Menu>
              </RB.Dropdown>
            </RB.Container>
          </div>
        </nav>
      </div>
    </header>
  )
}
