import React, { useRef, useState } from "react";
import { arrowDownIcon } from "../../utils/icons";
import styles from "./index.module.css";
import useOutsideAlerter from "../../hooks/useOutsideAlerter";

const Popover = ({ btnClassNames, btnText, iconClassnames, items = [], boxClassnames }) => {
  const [isShow, setIsShow] = useState(false);
  const popoverRef = useRef()

  const toggleShowPopover = () => setIsShow(!isShow);

  useOutsideAlerter(popoverRef, () => setIsShow(false))

  return (
    <div ref={popoverRef} className={styles.container}>
      <button onClick={toggleShowPopover} className={`${styles.btn} ${btnClassNames}`}>
        {btnText}
        {arrowDownIcon(iconClassnames)}
      </button>
      {isShow && (
        <ul className={`${styles['box-down']} ${boxClassnames}`}>
          {items.map((item, index) => (
            <li key={index}
            onClick={() => {
              item.onClick()
              toggleShowPopover()
            }}    
            >
              {item.name} {"  "}
              {item.icon}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Popover;
