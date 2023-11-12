import { configureStore } from "@reduxjs/toolkit";
import uiSlice from "./ui/uiSlice";
import userSlice from "./user/userSlice";
import authSlice from "./auth/authSlice";
import cardSlice  from "./card/cardSlice";

export const store = configureStore({
    reducer: {
        auth: authSlice,
        ui: uiSlice,
        user: userSlice,
        card: cardSlice
    }
})