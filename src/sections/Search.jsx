import React from 'react'
import index, { bell, search, logo} from '../assets/icons'
import { creator7 } from '../assets/images'
import styles from '../components/Search.module.css'



const Search = () => {
  return (
    <div className={styles.search_bar} >
      <div className={styles.searchbox_icon}>
        <img className={styles.logo_shown} src={logo} alt="logo" />
        <img className={styles.sear} src={search} alt="search icon" />
        <input
        className={styles.searchbox}
        type="text"
        placeholder='Search Item, Collection and Account'
        />
      </div>

      <div className={styles.right}>
        <div className={styles.user_creator}>
          <p>User</p>
          <p>Creator</p>
        </div>
        <div className={styles.not_prof}>
          <img
          src={bell}
          alt="notifications" />
          <div className={styles.circle_profile}>
            <img src={creator7} alt="loggedinUser"/>
          </div>
        </div>
      </div>



    </div>
  )
}

export default Search