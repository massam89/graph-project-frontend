import React, { useContext, useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import styles from './App.module.css'
import checkAuth from "./utils/checkAuth";
import Loader from "./components/loader";
import { Context } from "./store/ContextProvider";
import axios from "axios";

const App = () => {
  const {state, loaderHandler} = useContext(Context)
  const navigate = useNavigate()

  useEffect(() => {
    navigate(`${!checkAuth() ? '/login' : '/dashboard'}`)

    axios.interceptors.request.use(function (config) {
      loaderHandler(true)
      return config;
    }, function (error) {
      loaderHandler(false)
      return Promise.reject(error);
    });

    axios.interceptors.response.use(function (response) {
      loaderHandler(false)
      return response;
    }, function (error) {
      loaderHandler(false)
      return Promise.reject(error);
    });
  }, [navigate, loaderHandler])

  return (
    <div className={styles.app}>
      <Outlet />
      {state.loader && <Loader />}
    </div>
  );
};

export default App;
