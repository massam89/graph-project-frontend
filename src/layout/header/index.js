import React, { useContext } from "react";
import styles from "./index.module.css";
import checkAuth from "../../utils/checkAuth";
import { Context } from "../../store/ContextProvider";
import Popover from "../../components/popover";
import { logoutIcon } from "../../utils/icons";
import { logout } from "./_srv";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate()
  const {modalHandler, state} = useContext(Context)

  const logoutHandler = () => {
    logout()
    .then(res => {
      localStorage.removeItem('token')
      navigate('/')
    })
    .catch(err => modalHandler(err.response?.data.result))
  }

  const popoverItem = [
    {
      name: 'Logout',
      icon: logoutIcon(styles['logout-icon']),
      onClick: logoutHandler
    }
  ];

  return (
    <div className={styles.container}>
      <h1>Graph App</h1>
      {checkAuth() && (
        <Popover
          btnText={state.username}
          btnClassNames={styles.btn}
          iconClassnames={styles["arrow-down-icon"]}
          items={popoverItem}
          boxClassnames={styles["box-down"]}
        />
      )}
    </div>
  );
};

export default Header;
