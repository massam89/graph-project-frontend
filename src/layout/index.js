import React from "react";
import Header from "./header";
import Footer from "./footer";
import LoadingBar from "react-top-loading-bar";
import { useContext } from "react";
import { Context } from "../store/ContextProvider";

const Layout = (props) => {
  const { state, loadingBarHandler } = useContext(Context);

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
