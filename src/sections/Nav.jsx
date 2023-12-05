import React from 'react'

import { sidebar } from '../constants'
import { index, logo, search, ether, plus } from '../assets/icons'

const Nav = () => {
  return (
    <div className='sidenav'>
      <div className='nav-all' >
        <img
        src={logo}
        alt="nft logo"
        className='logo'
        width={80}
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

          <div className='nav-card'>
            <p>Your Balance</p>
            <h2>1,034.02</h2>

            <div className='ether_logo'>
              <div className='circle'><img className='ethercircle' src={ether} alt="etherlogo"/></div>
              <p>ETH</p>
            </div>

            <div className='ether_logo whitebox'>
              <div className='circle purple'><img src={plus} alt="plus icon"/></div>
              <a href="#">Top Up Balance </a>
            </div>



          </div>

        </nav>
      </div>

     

    </div>
  )
}

export default Nav