import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  loader: false,
  modal: { isShow: false, text: "" },
  loadMoreBtn: true,
  loadingBar: 0,
};

export const uiSlice = createSlice({
    name: 'ui',
    initialState,
    reducers: {
        loaderHandler: (state, action) => {
            state.loader = action.payload
        },
        modalHandler: (state, action) => {
            state.modal.isShow = action.payload.isShow
            state.modal.text = action.payload.text ? action.payload.text : ''
        },
        loadingBarHandler: (state, action) => {
            state.loadingBar = action.payload
        }
    }

})

export const uiActions = uiSlice.actions
export default uiSlice.reducer