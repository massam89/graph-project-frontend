import React, { useContext, useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import checkAuth from "./utils/checkAuth";
import Loader from "./components/loader";
import { Context } from "./store/ContextProvider";
import axios from "axios";
import Layout from "./layout";
import Modal from "./components/modal";

const App = () => {
  const {state, loaderHandler, modalHandler} = useContext(Context)
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
      if(error.response.status === 401){
        localStorage.removeItem('token')
        navigate('/')
      }
      return Promise.reject(error);
    });
  }, [navigate, loaderHandler])

  return (
    <Layout>
      <Outlet />
      {state.loader && <Loader />}
      {state.modal.isShow && (
        <Modal
          text={state.modal.text}
          btnText="OK"
          onClickBtn={() => modalHandler()}
        />
      )}
    </Layout>
  );
};

export default App;
