import './App.css';
import {Auctions, Creator, Hero, Nav, Search, Wallet} from './sections'

import React from 'react'

const App = () => {
  return (
    <main>
     <section className='left'>
        <Nav/>
     </section>
      <section className='right'>
         
            <section className='Search'>
               <Search/>
            </section>
         
            <section>
               <Hero/>
            </section>
         
            <section>
               <Wallet/>
            </section>
         
            <section>
               <Auctions/>
            </section>
         
            <section>
               <Creator/>
            </section>
      </section>

      




























    </main>
  )
}

export default App