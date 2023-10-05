import React, { useContext } from 'react'
import Form from '../../components/form'
import { useNavigate } from 'react-router-dom';
import { login } from './_srv';
import styles from './index.module.css'
import { lockIcon, userIcon } from '../../utils/icons';
import { Context } from '../../store/ContextProvider';

const Login = () => {
  const {modalHandler} = useContext(Context)

  const navigate = useNavigate()

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
    <div className={styles.container}>
      <Form {...formConfiguration} />
    </div>
  )
}

export default Login