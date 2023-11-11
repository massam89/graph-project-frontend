import React, { useCallback, useContext, useEffect, useState } from 'react'
import { getList, getUsername } from './_srv'
import { Context } from '../../store/ContextProvider'
import Card from '../../components/common/card'
import styles from './index.module.css'
import BtnWithLoader from '../../components/common/btnWithLoader'

const Dashboard = () => {
  const {state, usernameHandler, modalHandler, cardsHandler, loadingBarHandler} = useContext(Context)
  const [loadingOnBtn, setLoadingOnBtn] = useState(false)
  const size = state.cards.size
  const page = state.cards.page

  const getListHandler = useCallback(() => {
    setLoadingOnBtn(true)
    getList(page, size)
    .then(res => {
      if(res.result !== 'unauthorized'){
        cardsHandler(res)
        setLoadingOnBtn(false)
      }
    })
    .catch(err => {
      setLoadingOnBtn(false)
    })

  }, [size, page, cardsHandler])

  useEffect(() => {
    loadingBarHandler(25)
    getUsername()
    .then(res => {
      loadingBarHandler(100)
      usernameHandler(res.data.username)
    } )
    .catch(err => modalHandler(err.response?.data.result))

    getListHandler()

    // eslint-disable-next-line
  }, [])

  return (
    <div className={styles.container}>
      <div className={styles['list-count']}>
        <span id='viewed'>Viewed: {state.cards.viewed}</span>
        <span>Total: {state.cards.total}</span>
      </div>

      <div className={styles['cards-container']}>
        {state.cards.items.map((item, index) => <Card item={item} key={index} />)} 
      </div>

      {state.loadMoreBtn &&
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