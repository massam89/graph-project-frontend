import React from 'react'

const Input = ({config}) => {
  return (
    <div className={config.containerClassName} style={{ position: 'relative' }}>
      <span style={{ position:'absolute', top: '17px', left: '5px' }}>{config.icon}</span>
      <input { ...config } />
    </div>
  )
}

export default Input