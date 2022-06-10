import React from 'react'
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
        <div className='logo'>DUCK MARKET</div>
        <nav>
          <ul>
            <li>
              <Link to='/'>home</Link>
            </li>
            <li>
              <a href='/'>duck market</a>
            </li>
            <li>
              <Link to='/cart'>Cart</Link>
            </li>
            <li className='cartBtn'>
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
                  </RB.Dropdown.Menu>
                </RB.Dropdown>
              </RB.Container>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  )
}
