import React from 'react'
import styles from './index.module.css'
import airplaneImage from '../../assets/airplane.png'

const Card = ({containerClassNames, item}) => {

  console.log(item);

  return (
    <div className={`${styles.container} ${containerClassNames}`}>
      <div className={styles['top-box']}>

        <div className={styles.airline}>
          Luftanza
        </div>

        <div className={styles['details']}>

          <div className={styles['location-time-date']}>
            <span>Bangularo</span>
            <span>06:20</span>
            <span>June 12</span>
          </div>

          <div className={styles['airplane-image']}>
            <img src={airplaneImage} alt='airplane image' />
          </div>

          <div className={styles['location-time-date']}>
            <span>New Delhi</span>
            <span>10:20</span>
            <span>June 12</span>
          </div>

        </div>

      </div>

      <div className={styles['bottom-box']}>
        <span>$100</span>
      </div>

      <div className={styles.type}>
        <span>Economy</span>
      </div>

    </div>
  )
}

export default React.memo(Card)