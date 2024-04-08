import React, { useState } from 'react'
import Header from './header'
import Playlist from './playlist'
import SearchBar from './searchbar'
import SearchResults from './searchResults'

import styles from '../module-styling/mainpage.module.css'

const Mainpage = () => {
    const [playlist, setPlaylist] = useState([]);
    const handleAddTrack = (track) => {
        if (!playlist.some(playlistTrack => playlistTrack.ID === track.ID)) {
            setPlaylist(prevPlaylist => [...prevPlaylist, track]);
        }
    };

    const handleRemoveTrack = (trackToRemove) => {
        setPlaylist(prevPlaylist => prevPlaylist.filter(track => track.ID !== trackToRemove.ID));
      };

    return (
        <div className={styles.layout}>
            <div className={styles.header}>
                <Header />
            </div>
            <div className={styles.searchbar}>
                <SearchBar />
            </div>
            <div className={styles.searchResults}>
                <SearchResults onAddTrack={handleAddTrack} />
            </div>
            <div className={styles.playlist}>
                <Playlist playlist={playlist} onRemoveTrack={handleRemoveTrack} />
            </div>
        </div>
    )
}

export default Mainpage;