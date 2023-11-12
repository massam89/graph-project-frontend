import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  total: 0,
  viewed: 0,
  page: 1,
  size: 3,
  items: [],
  loadMore: true,
};

export const cardSlice = createSlice({
  name: "card",
  initialState,
  reducers: {
    cardHandler: (state, action) => {
      state.total = action.payload.total;
      state.viewed = state.page * state.size;
      state.page = state.page + 1;
      if (state.page * state.size > state.total) {
        state.loadMore = false;
      }
      state.items = [...state.items, ...action.payload.result];
    },
  },
});

export const cardActions = cardSlice.actions;
export default cardSlice.reducer;
