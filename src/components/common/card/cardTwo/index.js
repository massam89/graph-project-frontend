import React from 'react'
import airplaneImage from '../../../../assets/airplane.png'
import { upperCaseFirstLetter } from '../../../../utils/helper';
import styles from './index.module.css'

const CardTwo = ({item, isClicked}) => {

  return (
    <div className={`${styles.container} ${isClicked && styles['container-isClicked']}`} > 
      <div className={styles['details']}>
        <div className={styles['location-time-date']}>
          <span>From</span>
          <span>{item.dst.iso3}</span> 
          <span>{item.dst.country}</span>
        </div>

        <div className={styles['airplane']}>
          <div className={styles.dots}></div>
          <img src={airplaneImage} alt='airplane' />
          <div className={styles['price']}>
            <span>${item.price}</span>
          </div>
        </div>

        <div className={styles['location-time-date']}>
          <span>To</span>
          <span>{item.src.iso3}</span> 
          <span>{item.src.country}</span>
        </div>
      </div>    

      <div className={styles.type}>
        <span>{upperCaseFirstLetter(item.class)}</span>
      </div>
    </div>
  )
}

export default CardTwo