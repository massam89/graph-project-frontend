import React from 'react'
import styles from './index.module.css'

const BtnWithLoader = ({onClick, btnText, loadingText='Get Data', isLoading=true}) => {
  return (
    <button onClick={onClick}>{isLoading ? loadingText : btnText} {isLoading && <div className={styles["lds-dual-ring"]}></div>}</button>
  )
}

export default BtnWithLoader