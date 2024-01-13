import React from 'react'
import Playlist from './playlist'
import SearchBar from './searchbar'
import SearchResults from './searchResults'
import Track from './track'
import Tracklist from './tracklist'
import Upload from './upload'

const Mainpage = () => {
  return (
    <div>
        <Playlist/>
        <SearchBar/>
        <SearchResults/>
        <Track/>
        <Tracklist/>
        <Upload/>
    </div>
  )
}

export default Mainpage;
