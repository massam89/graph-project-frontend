import React, { useContext } from 'react'
import Form from '../../components/common/form'
import { useNavigate } from 'react-router-dom';
import { login } from './_srv';
import styles from './index.module.css'
import { lockIcon, userIcon } from '../../utils/icons';
import { Context } from '../../store/ContextProvider';
import { useEffect } from 'react';

const Login = () => {
  const {modalHandler, loadingBarHandler} = useContext(Context)
  const navigate = useNavigate()

  useEffect(() => {loadingBarHandler(100)}, [loadingBarHandler])

  const submitLogin = (data) => {
    login({
      username: data.userName.value,
      password: data.password.value
    })
    .then(res => {
      if(res.data.result === 'success'){
        localStorage.setItem('token', res.data.token)
        navigate('/dashboard')
      } else {
        modalHandler('Wrong username or password!')
      }
    })
    .catch(err => modalHandler('Connection Error!'))
  }

  const formConfiguration = {
    headerText: 'Login',
    headerClassNames: styles.header,
    buttonText: 'Login',
    buttonClassNames: styles['submit-btn'],
    formClassNames: styles.form,
    onSubmit: submitLogin,
    inputs: [
      {
        id: 'userName',
        name: 'userName',
        type: 'text',
        placeholder: 'Username',
        className: styles.input,
        icon: userIcon(styles.icon)
      },
      {
        id: 'password',
        name: 'password',
        type: 'password',
        placeholder: 'Password',
        className: styles.input,
        icon: lockIcon(styles.icon)
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