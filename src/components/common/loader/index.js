import React from 'react'
import styles from './index.module.css'

const Loader = () => {
  return (
    <div className={styles['loader-container']}>
       <span className={styles.loader}></span>
    </div>
  )
}

export default Loader