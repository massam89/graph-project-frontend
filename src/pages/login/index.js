import React from 'react'
import Form from '../../components/form'
import { useNavigate } from 'react-router-dom';
import { login } from './_srv';

const Login = () => {

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
      }
    })
    .catch(err => console.log(err))
  }

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
    onSubmit: submitLogin
  }

  return (
    <div>
      <Form config={formConfiguration} />
    </div>
  )
}

export default Login