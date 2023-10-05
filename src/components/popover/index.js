import React from 'react'
import { arrowDownIcon } from '../../utils/icons'
import styles from './index.module.css'

const Popover = ({btnClassNames, btnText, iconClassnames, items=[]}) => {
  return (
    <div>
      <button className={btnClassNames}>{btnText}{arrowDownIcon(iconClassnames)}</button>
      <ul>
        {items.map((item, index) => 
          <li>{item.name}{item.icon}</li>
          
        )}
      </ul>

    </div>
  )
}

export default Popover