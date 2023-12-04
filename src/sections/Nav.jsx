import React from 'react'

import { sidebar } from '../constants'
import { index, logo, search } from '../assets/icons'

const Nav = () => {
  return (
    <div className='sidenav'>
      <div className='nav-all' >
        <img
        src={logo}
        alt="nft logo"
        className='logo'
        width={120}
        height={90}
        
        />
        <nav>
          <ul className='flexbar'>
            {sidebar.map ((bar) => (
              <li className='flexbar-list'>
                <a className='flexbar-icon' href="">
                  <img src={bar.icon} alt="label icons" />
                  <p>{bar.label}</p>
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>

      <div className='imageBox'>
        
      </div>

    </div>
  )
}

export default Nav