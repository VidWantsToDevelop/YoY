import React from 'react'

export default function Header() {
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
            <li className='btn'>
              <a href='/'>my cart</a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  )
}
