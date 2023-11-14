import React from 'react'
import Form from '../../components/common/form'
import styles from './index.module.css'
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { uiActions } from '../../store/ui/uiSlice';
import { loginHandler } from '../../store/auth/authActions';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLock, faUserCircle } from '@fortawesome/free-solid-svg-icons';

const Login = () => {
  
  const dispatch = useDispatch()

  useEffect(() => {dispatch(uiActions.loadingBarHandler(100))}, [dispatch])

  const submitFormHandler = (data) => {
    const username = data.userName.value
    const password = data.password.value
    dispatch(loginHandler({username, password}))
  }

  const formConfiguration = {
    headerText: 'Login',
    headerClassNames: styles.header,
    buttonText: 'Login',
    buttonClassNames: styles['submit-btn'],
    formClassNames: styles.form,
    onSubmit: submitFormHandler,
    inputs: [
      {
        id: 'userName',
        name: 'userName',
        type: 'text',
        placeholder: 'Username',
        className: styles.input,
        icon: <FontAwesomeIcon icon={faUserCircle} />
      },
      {
        id: 'password',
        name: 'password',
        type: 'password',
        placeholder: 'Password',
        className: styles.input,
        icon: <FontAwesomeIcon icon={faLock} />
      }
    ]
  }

  return (
    <div className={styles.container} >
      <Form id='login-form' {...formConfiguration} />
    </div>
  )
}

export default Login