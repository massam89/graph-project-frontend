import React from 'react'
import styles from './index.module.css'
import checkAuth from '../../utils/checkAuth'

const Header = () => {
  return (
    <div className={styles.container}>
        <h1>Graph App</h1>
       {checkAuth() && <button className={styles.btn}>Logout</button>}
    </div>
  )
}

export default Header