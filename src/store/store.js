import { configureStore } from "@reduxjs/toolkit";
import uiSlice from "./ui/uiSlice";
import userSlice from "./user/userSlice";
import authSlice from "./auth/authSlice";

export const store = configureStore({
    reducer: {
        auth: authSlice,
        ui: uiSlice,
        user: userSlice
    }
})