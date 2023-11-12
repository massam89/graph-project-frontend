import React from "react";
import Header from "./header";
import Footer from "./footer";
import LoadingBar from "react-top-loading-bar";
import { useEffect } from "react";
import { driverHandler } from "../../utils/driver";
import { useDispatch, useSelector } from "react-redux";
import { uiActions } from "../../store/ui/uiSlice";

const Layout = (props) => {

  const loadingBar = useSelector(state => state.ui.loadingBar)
  const dispatch = useDispatch()

  useEffect(() => {
    driverHandler({
       config: {
        element: '#login-form',
        title: 'Login Form',
        description: 'You can log in with your username and password easily'
       }
    })
  },[])

  return (
    <>
      <LoadingBar
        color="#f11946"
        progress={loadingBar}
        onLoaderFinished={() => {dispatch(uiActions.loadingBarHandler(0))}}
      />
      <Header />
      {props.children}
      <Footer />
    </>
  );
};

export default Layout;
