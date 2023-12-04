import React from 'react'
import style from '../components/Hero.module.css'
import { arrowDown, arrowUp, ether } from '../assets/icons'

const WalletCard = ( {Name, Amount, Percentage, symbol}) => {
  return (
      <div className= {style.box}>
        <div className={style.category_amount}>
          <p className={style.category}>{Name}</p>

          <div className={style.etherText}>
            <img src={ether} alt="etherLogo" />
            <p>{Amount} <span>ETH</span></p>
      
          </div>
        </div>
        <div className={style.amount}>
          <img src={symbol} alt="arrowIcon" />
          <p>{Percentage} <span>%</span> </p>
        </div>
      
      
      </div>
  )
}

export default WalletCard