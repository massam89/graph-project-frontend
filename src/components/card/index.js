import React from 'react'
import styles from './index.module.css'
import airplaneImage from '../../assets/airplane.png'
import { upperCaseFirstLetter } from '../../utils/helper';
import moment from 'moment/moment';

const Card = ({containerClassNames, item}) => {
  
  return (
    <div className={`${styles.container} ${containerClassNames}`}>
      <div className={styles['top-box']}>

        <div className={styles.airline}>
          <img src={item.logoSrc} style={item.logoStyle} loading='lazy' alt='airline' />
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

      <div className={styles.type}>
        <span>{upperCaseFirstLetter(item.class)}</span>
      </div>

    </div>
  )
}

export default React.memo(Card)