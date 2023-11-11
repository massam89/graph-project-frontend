import React from 'react'
import { calculateDuration } from '../../../../utils/helper';
import moment from 'moment/moment';
import styles from './index.module.css'

const CardThree = ({item, isClicked}) => {
  
  const details = {
    FlightTime: `${moment(item.src.time).format('hh:mm')} - ${moment(item.dst.time).format('hh:mm')}`,
    Duration: calculateDuration(item.src.time, item.dst.time),
    Boarding: item.boarding ,
    Transfer: item.transfer ? 'Yes' : 'No',
    Gate: item.gates ,
    Seat: item.seat,
  }

  return (
    <div className={`${styles.container} ${isClicked && styles['container-isClicked']}`} > 
      <div className={styles['details']}>
        {Object.entries(details).map((item, index) => 
          <div className={styles['details-box']} key={index}>
            <span>{item[1]}</span>
            <span>{item[0]}</span>
          </div>
        )}
      </div>
    </div>
  )
}

export default CardThree