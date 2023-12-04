import React from 'react'
import index, { bell, search } from '../assets/icons'
import { creator2 } from '../assets/images'
import styles from '../components/Search.module.css'



const Search = () => {
  return (
    <div>
      <img src={search} alt="search icon" />
      <input 
      className='searchbox'
      type="text" 
      placeholder='Search Item, Collection and Account'
      />

      <div>
        <p className= {styles.big} >User</p>
        <p>Creator</p>
      </div>

      <img 
      src={bell} 
      alt="notifications" />

      <div className='circle-profile'>
        <img src={creator2} alt="loggedinUser"/>
      </div>



    </div>
  )
}

export default Search