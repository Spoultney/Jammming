import React from 'react'
import TrackDivs from './track';

const SearchResults = ({ onAddTrack }) => {
  return (
    <TrackDivs onAddTrack={onAddTrack} />
  )
}

export default SearchResults;