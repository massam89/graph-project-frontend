import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { uiActions } from "../store/ui/uiSlice";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const useInterceptor = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()

  useEffect(() => {
    axios.interceptors.request.use(
      (config) => {
        dispatch(uiActions.loaderHandler(true));
        return config;
      },
      (error) => {
        dispatch(uiActions.loaderHandler(false));
        if (error.response.status === 401) {
          localStorage.removeItem("token");
          navigate("/");
        }
        return Promise.reject(error);
      }
    );

    axios.interceptors.response.use(
      (response) => {
        dispatch(uiActions.loaderHandler(false));
        return response;
      },
      (error) => {
        dispatch(uiActions.loaderHandler(false));
        if (error.response.status === 401) {
          localStorage.removeItem("token");
          navigate("/");
        }
        return Promise.reject(error);
      }
    );
  }, [dispatch, navigate]);

};

export default useInterceptor;
