import React, { useContext, useEffect } from 'react'
import { getUsername } from './_srv'
import { Context } from '../../store/ContextProvider'
import Card from '../../components/card'

const Dashboard = () => {
  const {usernameHandler, modalHandler} = useContext(Context)

  useEffect(() => {
    getUsername()
    .then(res => usernameHandler(res.data.username))
    .catch(err => modalHandler(err.response?.data.result))
  }, [])

  return (
    <Card />
  )
}

export default Dashboard