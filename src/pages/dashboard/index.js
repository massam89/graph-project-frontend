import React, { useContext, useEffect } from 'react'
import { getUsername } from './_srv'
import { Context } from '../../store/ContextProvider'

const Dashboard = () => {
  const {usernameHandler, modalHandler} = useContext(Context)

  useEffect(() => {
    getUsername()
    .then(res => usernameHandler(res.data.username))
    .catch(err => modalHandler(err.response?.data.result))
  }, [])

  return (
    <div>Dashboard</div>
  )
}

export default Dashboard