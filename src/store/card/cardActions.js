import { getCardsRequest } from "./_srv";
import { cardActions } from "./cardSlice";

export const getCardHandler = ({ page, size, setLoadingOnBtn }) => {
  return (dispatch) => {
    setLoadingOnBtn(true);
    getCardsRequest(page, size)
      .then((res) => {
        setLoadingOnBtn(false);
        if (res.result !== "unauthorized") {
          dispatch(cardActions.cardHandler(res));
        }
      })
      .catch((err) => {
        setLoadingOnBtn(false);
      });
  };
};
