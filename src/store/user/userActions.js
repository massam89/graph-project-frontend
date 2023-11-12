import { uiActions } from "../ui/uiSlice";
import { getUsernameRequest } from "./_srv";
import { userActions } from "./userSlice";

export const getUserName = () => {
  return (dispatch) => {
    dispatch(uiActions.loadingBarHandler(25));
    getUsernameRequest()
      .then((res) => {
        dispatch(uiActions.loadingBarHandler(100));
        dispatch(userActions.userNameHandler(res.data.username));
      })
      .catch((err) =>
        dispatch(uiActions.modalHandler(err.response?.data.result))
      );
  };
};
