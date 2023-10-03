import React from 'react'
import Input from '../../components/input'

const Form = ({config}) => {

  const {
    header,
    formStyles={},
    formClassNames='',
    inputs=[],
    onSubmit
  } = config

const onSubmitHandler = (e) => {
  e.preventDefault()
  onSubmit(e.target)
}

  return (
    <form onSubmit={onSubmitHandler} className={formClassNames} style={formStyles}>
      <h2>{header}</h2>
      {inputs.map((input, index) => <Input key={index} config={input} />)}
      <button type='submit'>Login</button>
    </form>
  )
}

export default Form