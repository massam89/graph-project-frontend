import React, { useCallback, useContext, useEffect, useState } from 'react'
import { getList, getUsername } from './_srv'
import { Context } from '../../store/ContextProvider'
import Card from '../../components/card'
import styles from './index.module.css'

const Dashboard = () => {
  const {state, usernameHandler, modalHandler, cardsHandler} = useContext(Context)
  const size = state.cards.size
  const page = state.cards.page

  const getListHandler = useCallback(() => {
    getList(page, size)
    .then(res => {
      cardsHandler(res.data)
    })
    .catch(err => console.log(err))

  }, [size, page, cardsHandler])

  useEffect(() => {
    getUsername()
    .then(res => usernameHandler(res.data.username))
    .catch(err => modalHandler(err.response?.data.result))

    getListHandler()

  }, [])

  return (
    <div className={styles.container}>

      <div className={styles['list-count']}>
        <span>Viewed: {state.cards.viewed}</span>
        <span>Total: {state.cards.total}</span>
      </div>

      <div className={styles['cards-container']}>
        {state.cards.items.map((item, index) => 
        <Card 
          item={item} 
          key={index}
          containerClassNames={styles.card}
        />
        )} 
      </div>

      {state.loadMoreBtn &&
        <div className={styles['load-more']}>
          <button onClick={getListHandler}>
            <span>Load more</span>  
          </button>
        </div>
      }
      
    </div>
    
  )
}

export default Dashboard