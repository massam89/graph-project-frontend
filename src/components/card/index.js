import React, { useState } from 'react'
import styles from './index.module.css'
import CardOne from './cardOne';
import CardThree from './cardThree';
import CardTwo from './cardTwo';

const Card = ({item}) => {
  const [isClicked, setIsClicked] = useState(false)

  const toggleClick = () => {
    setIsClicked(prevState => !prevState)
  }
  
  return (
    <div onClick={toggleClick} className={`${styles.container} ${isClicked && styles['container-isClicked']}`}>
      <CardOne item={item} isClicked={isClicked} />
      <CardTwo item={item} />
      {/* <CardThree item={item} />  */}
    </div>
  )
}

export default React.memo(Card)