import React from 'react'
import Input from '../../components/input'

const Form = (
  {
  onSubmit,
  inputs=[],
  formClassNames='',
  headerText,
  headerClassNames='',
  buttonText,
  buttonClassNames='',
  id
}) => {

const onSubmitHandler = (e) => {
  e.preventDefault()
  onSubmit(e.target)
}

  return (
    <form id={id} onSubmit={onSubmitHandler} className={formClassNames}>
      <h2 className={headerClassNames}>{headerText}</h2>
      {inputs.map((input, index) => <Input key={index} config={input} />)}
      <button className={buttonClassNames} type='submit'>{buttonText}</button>
    </form>
  )
}

export default Form