import React from 'react'
import styles from '../module-styling/searchbar.module.css'
const SearchBar = () => {
  return (
    <div className={styles.search}>
        <input type='text' id='searchbar' name='searchbar' placeholder='Enter Song/Artist' className={styles.searchbar}/>
    </div>
  )
}

export default SearchBar;
