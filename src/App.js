import React, { useContext, useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import checkAuth from "./utils/checkAuth";
import Loader from "./components/common/loader";
import { Context } from "./store/ContextProvider";
import axios from "axios";
import Layout from "./components/layout";
import Modal from "./components/common/modal";
import { useDispatch, useSelector } from "react-redux";
import { uiActions } from "./store/ui/uiSlice";

const App = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const loader = useSelector(state => state.ui.loader)
  const modal = useSelector(state => state.ui.modal)

  useEffect(() => {
    navigate(`${!checkAuth() ? '/login' : '/dashboard'}`)

    axios.interceptors.request.use((config) => {
      dispatch(uiActions.loaderHandler(true))
      return config;
    }, (error) => {
      dispatch(uiActions.loaderHandler(false))
      if(error.response.status === 401){
        localStorage.removeItem('token')
        navigate('/')
      }
      return Promise.reject(error);
    });

    axios.interceptors.response.use((response) => {
      dispatch(uiActions.loaderHandler(false))
      return response;
    }, (error) => {
      dispatch(uiActions.loaderHandler(false))
      if(error.response.status === 401){
        localStorage.removeItem('token')
        navigate('/')
      }
      return Promise.reject(error);
    });
  }, [navigate, dispatch])

  return (
    <Layout>
      <Outlet />
      {loader && <Loader />}
      {modal.isShow && (
        <Modal
          text={modal.text}
          btnText="OK"
          onClickBtn={() => dispatch(uiActions.modalHandler({isShow: false}))}
        />
      )}
    </Layout>
  );
};

export default App;
