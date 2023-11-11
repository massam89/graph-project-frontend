import { uiActions } from "../ui/uiSlice";
import { loginRequest, logoutRequest } from "./_srv";
import { authActions } from "./authSlice";

export const loginHandler = ({ username, password }) => {
  return (dispatch) => {
    loginRequest({
      username: username,
      password: password,
    })
      .then((res) => {
        if (res.data.result === "success") {
          localStorage.setItem("token", res.data.token);
          dispatch(authActions.login());
        } else {
          dispatch(
            uiActions.modalHandler({
              isShow: true,
              text: "Wrong username or password!",
            })
          );
        }
      })
      .catch((err) =>
        dispatch(
          uiActions.modalHandler({ isShow: true, text: "Connection Error!" })
        )
      );
  };
};

export const logoutHandler = () => {
  return (dispatch) => {
    logoutRequest()
      .then((res) => {
        localStorage.removeItem("token");
        dispatch(authActions.logout());
      })
      .catch((err) =>
        dispatch(
          uiActions.modalHandler({
            isShow: true,
            text: err.response?.data.result,
          })
        )
      );
  };
};
