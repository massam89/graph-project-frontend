import React from 'react'

const Input = ({config}) => {
  return (
    <div className={config.containerClassName} style={config.containerStyles}>
      <label htmlFor={config.id}>{config.label}</label>
      <input { ...config } />
    </div>
  )
}

export default Input