import React, { useCallback, useEffect, useState } from 'react'
import Card from '../../components/common/card'
import styles from './index.module.css'
import BtnWithLoader from '../../components/common/btnWithLoader'
import { useDispatch, useSelector } from 'react-redux'
import { getUserName } from '../../store/user/userActions'
import { getCardHandler } from '../../store/card/cardActions'

const Dashboard = () => {
  const dispatch = useDispatch()
  const [loadingOnBtn, setLoadingOnBtn] = useState(false)
  const cards = useSelector(state => state.card)
  const size = cards.size
  const page = cards.page

  const getListHandler = useCallback(() => {
    dispatch(getCardHandler({size, page, setLoadingOnBtn}))
  }, [size, page, dispatch])

  useEffect(() => {
   dispatch(getUserName())
   getListHandler()

    // eslint-disable-next-line
  }, [dispatch])

  return (
    <div className={styles.container}>
      <div className={styles['list-count']}>
        <span id='viewed'>Viewed: {cards.viewed}</span>
        <span>Total: {cards.total}</span>
      </div>

      <div className={styles['cards-container']}>
        {cards.items.map((item, index) => <Card item={item} key={index} />)} 
      </div>

      {cards.loadMore &&
        <div className={styles['load-more']}>
          <BtnWithLoader 
            btnText='Load More'
            onClick={getListHandler}
            isLoading={loadingOnBtn}
            />
        </div>
      }
    </div>
    
  )
}

export default Dashboard