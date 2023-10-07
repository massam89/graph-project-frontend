import React from 'react'
import styles from './index.module.css'
import CardOne from './cardOne';
import CardThree from './cardThree';
import CardTwo from './cardTwo';

const Card = ({item}) => {
  
  return (
    <div className={styles.container}>
      <CardOne item={item} />
      {/* <CardTwo item={item} />
      <CardThree item={item} /> */}
    </div>
  )
}

export default React.memo(Card)