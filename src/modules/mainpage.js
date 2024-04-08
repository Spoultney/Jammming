import React from 'react'
import Header from './header'
import Playlist from './playlist'
import SearchBar from './searchbar'
import SearchResults from './searchResults'
import Track from './track'
import Tracklist from './tracklist'
import Upload from './upload'
import styles from '../module-styling/mainpage.module.css'


const Mainpage = () => {
  return (
    <div className={styles.layout}>
        <div className={styles.header}>
            <Header/>   
        </div>
        <div className={styles.searchbar}>
            <SearchBar/>    
        </div>
        <div className={styles.searchResults}>
            <SearchResults/>
        </div>
        <div className={styles.playlist}>
            <Playlist/>
        </div>
        
        
        
        {/* <Track/>
        <Tracklist/>
        <Upload/> */}
    </div>
  )
}

export default Mainpage;
