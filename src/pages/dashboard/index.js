import React, { useCallback, useContext, useEffect } from 'react'
import { getList, getUsername } from './_srv'
import { Context } from '../../store/ContextProvider'
import Card from '../../components/card'
import styles from './index.module.css'

const Dashboard = () => {
  const {state, usernameHandler, modalHandler, cardsHandler} = useContext(Context)

  const getListHandler = useCallback(() => {
    getList(state.cards.page, state.cards.size)
    .then(res => cardsHandler(res.data))
    .catch(err => console.log(err))
  }, [])

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

      {state.cards.items.map(item => <Card />)} 
    </div>
    
  )
}

export default Dashboard