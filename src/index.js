import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import ContextProvider from "./store/ContextProvider";
import router from "./router/router";

import "./styles/global.css";
import "driver.js/dist/driver.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <ContextProvider>
    <RouterProvider router={router} />
  </ContextProvider>
);
