import React from 'react'
import { creator2 } from '../assets/images'
import style from './Creator.module.css'


const CreatorCards = ({Name, Username, ProfilePic}) => {
  return (
    <div className={style.flex} >

        <div className={style.flex_dp}>
            <div className={style.dp} >
                <img
                src={ProfilePic}
                alt="" />
            </div>
            <div className={style.text_title}>
                <h3>{Name}</h3>
                <p>@{Username}</p>
            </div>
        </div>

     



    </div>
  )
}

export default CreatorCards