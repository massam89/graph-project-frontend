import React, { useCallback, useContext, useEffect, useState } from 'react'
import { getList, getUsername } from './_srv'
import { Context } from '../../store/ContextProvider'
import Card from '../../components/card'
import styles from './index.module.css'

const Dashboard = () => {
  const [isLoading, setIsLoading] = useState(false)
  const [isLoadMoreShow, setIsLoadMoreShow] = useState(true)
  const {state, usernameHandler, modalHandler, cardsHandler} = useContext(Context)
  const size = state.cards.size
  const page = state.cards.page

  const getListHandler = useCallback(() => {
    setIsLoading(true)
    getList(state.cards.page + 1, state.cards.size)
    .then(res => {
      setIsLoading(false)
      cardsHandler(res.data)
    } )
    .catch(err => {
      setIsLoading(false)
      console.log(err)
    })
  }, [])

  useEffect(() => {
    getUsername()
    .then(res => usernameHandler(res.data.username))
    .catch(err => modalHandler(err.response?.data.result))

    getListHandler()
   
  }, [])

  useEffect(() => {
    if(size === page) setIsLoadMoreShow(false)
  }, [size, page] )

  return (
    <div className={styles.container}>

      <div className={styles['list-count']}>
        <span>Viewed: {state.cards.viewed}</span>
        <span>Total: {state.cards.total}</span>
      </div>

      <div className={styles['cards-container']}>
        {state.cards.items.map((item, index) => <Card item={item} key={index} />)} 
      </div>

      {isLoadMoreShow &&
        <div className={styles['load-more']}>
          <button onClick={getListHandler}>
            {!isLoading ?
              <span>Load more</span>
            :
              <span>Get Data</span>
          }   
          </button>
        </div>
      }
      
    </div>
    
  )
}

export default Dashboard