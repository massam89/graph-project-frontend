import React from 'react'
import airplaneImage from '../../../assets/airplane.png'
import { upperCaseFirstLetter } from '../../../utils/helper';
import moment from 'moment/moment';
import styles from './index.module.css'

const CardThree = ({item, isClicked}) => {

  return (
    <div className={`${styles.container} ${isClicked && styles['container-isClicked']}`} > 
      <div className={styles['top-box']}>

        <div className={styles.airline}>
          <img src={item.logoSrc} loading='lazy' alt='airline' />
        </div>

        <div className={styles['details']}>

          <div className={styles['location-time-date']}>
          <span>{item.src.iso3}</span>
            <span>{moment(item.src.time).format('hh:mm')}</span> 
            <span>{moment(item.src.time).format('MMM DD')}</span>
          </div>

          <div className={styles['airplane-image']}>
            <img src={airplaneImage} alt='airplane' />
          </div>

          <div className={styles['location-time-date']}>
            <span>{item.dst.iso3}</span>
            <span>{moment(item.dst.time).format('hh:mm')}</span> 
            <span>{moment(item.dst.time).format('MMM DD')}</span>
          </div>

        </div>

      </div>

      <div className={styles['bottom-box']}>
        <span>${item.price}</span>
      </div>
    </div>
  )
}

export default CardThree