import React from 'react'
import style from '../components/Auctions.module.css'
import { ether } from '../assets/icons'


const Product = ( {imgURL, Name, Likes, art , username, price}) => {
  return (
    <div>
        <div className={style.card}>
            <div className= {style.image}>
                <img 
                
                className= {style.myimg}
                src={imgURL} alt="" />
            </div>

            <div className={style.prodName}>
                <h3>{Name}</h3>
                <p>{Likes} Likes</p>

            </div>

            <div className={style.creator_name}>
                <div className={style.creator}>
                    <img 
                    src={art} 
                    alt="creator image" />
                </div>
                <p>{username}</p>
            </div>


            <div className={style.current_price}>
                <p>Current Bid</p>

                <div className={style.ether_price}>
                    <img src={ether} alt="ether-logo" />
                    <p>{price} <span>ETH</span></p>
                </div>




            </div>





        </div>



    </div>
  )
}

export default Product