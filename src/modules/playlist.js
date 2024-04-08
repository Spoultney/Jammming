// Playlist component
import React from 'react';
import styles from '../module-styling/playlist.module.css';


const Playlist = ({ playlist, onRemoveTrack }) => {
  return (
    <div className={styles.playlistContainer}>
      <h2>Your Playlist</h2>
      <div>
        {playlist.map((track, index) => (
          <div key={track.ID} className={styles.trackItem}>
            <p>{track.TrackName}</p>
            <p>{track.Artist}</p>
            <p>{track.Album}</p>
            <button onClick={() => onRemoveTrack(track)}>Remove from Playlist</button>
          </div>
        ))}
      </div>
    </div>
  );
};
export default Playlist;