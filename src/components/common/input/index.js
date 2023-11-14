import React from 'react'

const Input = ({config}) => {
  
  return (
    <div className={config.containerClassName} style={{ position: 'relative' }}>
      <span style={{ position:'absolute', top: '20px', left: '7px' }}>{config.icon}</span>
      <input { ...config } />
    </div>
  )
}

export default Input