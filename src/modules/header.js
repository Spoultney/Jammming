import React from 'react'
import styles from '../module-styling/header.module.css'

const Header = () => {
    return (
        <div className={styles.wrapper}>
            <div >
                <h1 className={styles.header}>Jamming</h1>
                <h2 className={styles.header}>The Ultimate Playlist Generator</h2>
            </div>
        </div>
    )
}

export default Header;
