import React from 'react'
import styles from '../module-styling/track.module.css'


 const tracks = [
  {
  TrackName: "Juliet",
  Artist: "Sonata Artica",
  Album: "The Days of Grays",
  ID: "1suiasg182314aajdi2"
},
{
  TrackName: "Love Is A Long Road",
  Artist: "Tom Petty",
  Album: "Full Moon Fever",
  ID: "4sjslkvcoig182314aajdi2"
},
{
  TrackName: "Fuel",
  Artist: "Metallica",
  Album: "Reload",
  ID: "8rfdjs77sg182314aajdi2"
}]
  
function TrackDivs() {
  return (

    <div className={styles.trackContainer}>
      <h2>Search Results</h2>
      {tracks.map((track) => (
        <div key={track.ID} className={styles.trackItem}>
          <p>{track.TrackName}</p>
          <p>{track.Artist}</p>
          <p>{track.Album}</p>
        </div>
      ))}
    </div>
  
  );
}

export default TrackDivs;