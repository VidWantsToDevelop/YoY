import React from 'react'
import { States } from '../Context/Context'
import { AiOutlineShoppingCart as CartIcon } from 'react-icons/ai'
import * as RB from 'react-bootstrap'

export default function Header() {
  const {
    state: { cart },
  } = States()

  return (
    <header>
      <div className='header-inner'>
        <div className='logo'>DUCK MARKET</div>
        <nav>
          <ul>
            <li>
              <a href='/'>home</a>
            </li>
            <li>
              <a href='/'>duck market</a>
            </li>
            <li>
              <a href='/'>about</a>
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
                            <h5>{el.duckName}</h5>
                            <h4>{el.price}</h4>
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
