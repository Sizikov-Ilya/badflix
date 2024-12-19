import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  order: "NUM_VOTE",
  type: "",
  page: 1,
  genreId: "",
  countries: "",
  year: "",
};

export const currentQuerySlice = createSlice({
  name: "currentQuerySlice",
  initialState,
  reducers: {
    selectQuery: (state, action) => ({
      ...state,
      ...action.payload,
    }),
    resetQuery: () => initialState,
  },
});

export const { selectQuery, resetQuery } = currentQuerySlice.actions;

export default currentQuerySlice.reducer;
