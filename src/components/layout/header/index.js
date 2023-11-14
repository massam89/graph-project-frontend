import React from "react";
import styles from "./index.module.css";
import Popover from "../../common/popover";
import { useDispatch, useSelector } from "react-redux";
import { logoutHandler } from "../../../store/auth/authActions";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSignOut } from "@fortawesome/free-solid-svg-icons";

const Header = () => {
  const dispatch = useDispatch()

  const username = useSelector(state => state.user.userName)

  const isLogin = useSelector(state => state.auth.isLogin)

  const clickLogoutHandler = () => {
    dispatch(logoutHandler())
  }

  const popoverItem = [
    {
      name: 'Logout',
      icon: <FontAwesomeIcon icon={faSignOut} />,
      onClick: clickLogoutHandler
    }
  ];

  return (
    <div className={styles.container}>
      <h1>Graph App</h1>
      {isLogin && (
        <Popover
          btnText={username}
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
