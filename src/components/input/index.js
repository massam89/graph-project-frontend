import React from 'react'

const Input = ({config}) => {
  return (
    <div className={config.containerClassName} style={config.containerStyles}>
      <label htmlFor={config.id}>{config.label}</label>
      <input id={config.id} type={config.type} value={config.value} className={config.className} style={config.styles} />
    </div>
  )
}

export default Input