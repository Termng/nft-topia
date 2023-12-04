import React from 'react'
import { CardWallet } from '../constants'

import style from '../components/Hero.module.css'
import WalletCard from '../components/WalletCard'

const Hero = () => {
  return (
    <div>
      <div className={style.container}>

        <div className={style.box_container}>
          <video src=""></video>
          <p>Discover, Create and Sell Your Own NFT.</p>
          <div className={style.hero_button}>
            <a href="#">Discover</a>
            <a href="#">Create</a>
          </div>
        </div>


      <div className={style.box_flex}>
        {CardWallet.map((mywallet) => (
        
          <WalletCard key={mywallet.Name} {...mywallet}/>
        ))}
      </div>
















      </div>
    </div>
  )
}

export default Hero