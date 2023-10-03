import React from 'react'
import Form from '../../components/form'
import { login } from './_srv';

const Login = () => {

  const formConfiguration = {
    header: 'Login',
    inputs: [
      {
        id: 'userName',
        name: 'userName',
        type: 'text',
        label: 'Username'
      },
      {
        id: 'password',
        name: 'password',
        type: 'password',
        label: 'Password'
      }
    ],
    onSubmit: (data) => {
      login({
        username: data.userName.value,
        password: data.password.value
      })
      .then(res => {
        if(res.data.result === 'success'){
          localStorage.setItem('token', res.data.token)
        }
      })
      .catch(err => console.log(err))
    }
  }

  return (
    <div>
      <Form config={formConfiguration} />
    </div>
  )
}

export default Login