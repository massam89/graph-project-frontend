import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import ContextProvider from "./store/ContextProvider";
import router from "./router/router";

import "./styles/global.css";
import "driver.js/dist/driver.css";
import { Provider } from "react-redux";
import { store } from "./store/store";

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <ContextProvider>
      <RouterProvider router={router} />
    </ContextProvider>
  </Provider>
);
