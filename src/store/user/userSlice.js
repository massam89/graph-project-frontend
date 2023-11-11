import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    userName: ''
}

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        userNameHandler: (state, action) => {
            console.log(action.payload);
            state.userName = action.payload
        }
    }
})

export const userActions = userSlice.actions
export default userSlice.reducer