import React from 'react'
import CreatorCards from '../components/CreatorCards'
import {myCreators} from '../constants/index'
import style from '../components/Creator.module.css'

const Creator = () => {
  return (
    <div className={style.creator_flex}>
      <div className={style.header}>
        <h2>Top Creator</h2>
        <p>See all</p>
      </div>

     



      <ol className={style.list}>
          {myCreators.map((people) => (
            
          <li className={style.clist}>
            <CreatorCards key={people.Name} {...people}/> 
            <p>Follow</p>
          </li>
          ))}
      </ol>


    </div>
  )
}

export default Creator