import React, { useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import styles from './App.module.css'
import checkAuth from "./utils/checkAuth";

const App = () => {
  const navigate = useNavigate()

  useEffect(() => {
    navigate(`${!checkAuth() ? '/login' : '/dashboard'}`)
  }, [navigate])

  return (
    <div className={styles.app}>
      <Outlet />
    </div>
  );
};

export default App;
