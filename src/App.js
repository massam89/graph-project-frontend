import React, { useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import Loader from "./components/common/loader";
import Layout from "./components/layout";
import Modal from "./components/common/modal";
import { useDispatch, useSelector } from "react-redux";
import { uiActions } from "./store/ui/uiSlice";
import useInterceptor from "./hooks/useInterceptor";

const App = () => {
  useInterceptor()
  
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const loader = useSelector(state => state.ui.loader)
  const modal = useSelector(state => state.ui.modal)
  const isLogin = useSelector(state => state.auth.isLogin)

  useEffect(() => {
    navigate(`${!isLogin ? '/login' : '/dashboard'}`)
  }, [isLogin, navigate])

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
