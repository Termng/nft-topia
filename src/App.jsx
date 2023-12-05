import './App.css';
import {Auctions, Creator, Hero, Nav, Search} from './sections'

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
         
      
            <section className='below_hero'>
               <section className='productSizing'>
                  <Auctions/>
               </section>
               <section>
                  <Creator/>
               </section>
            </section>
      </section>

      




























    </main>
  )
}

export default App