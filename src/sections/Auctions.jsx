import React from 'react'
import style from '../components/Auctions.module.css'
import Product from '../components/Product'
import { auctions } from '../constants'


const Auctions = () => {
  return (
    <div>
  <div>
  
        <div className={style.uppercat}>
          <h2>Trending Auctions</h2>
          <div className={style.cat}>
            <p>Art</p>
            <p>Music</p>
            <p>Collectibles</p>
            <p>Utility</p>
          </div>
        </div>
  
  
        <div className={style.card_flex}>
          {auctions.map((prods) => (
            <Product key={prods.Likes} {...prods}/>
          ))}
        </div>
</div>



      This is the creators section oo


     
    </div>
  )
}

export default Auctions