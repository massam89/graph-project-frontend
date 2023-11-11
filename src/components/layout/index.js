import React from "react";
import Header from "./header";
import Footer from "./footer";
import LoadingBar from "react-top-loading-bar";
import { useContext } from "react";
import { Context } from "../../store/ContextProvider";
import { useEffect } from "react";
import { driverHandler } from "../../utils/driver";

const Layout = (props) => {
  const { state, loadingBarHandler } = useContext(Context);

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
        progress={state.loadingBar}
        onLoaderFinished={() => loadingBarHandler(0)}
      />
      <Header />
      {props.children}
      <Footer />
    </>
  );
};

export default Layout;
