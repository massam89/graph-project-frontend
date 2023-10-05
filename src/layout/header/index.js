import React, { useContext } from "react";
import styles from "./index.module.css";
import checkAuth from "../../utils/checkAuth";
import { Context } from "../../store/ContextProvider";
import Popover from "../../components/popover";
import { logoutIcon } from "../../utils/icons";

const Header = () => {
  const popoverItem = [
    {
      name: 'Logout',
      icon: logoutIcon(styles['logout-icon'])
    }
  ];

  return (
    <div className={styles.container}>
      <h1>Graph App</h1>
      {checkAuth() && (
        <Popover
          btnText="Admin"
          btnClassNames={styles.btn}
          iconClassnames={styles["arrow-down-icon"]}
          items={popoverItem}
        />
      )}
    </div>
  );
};

export default Header;
