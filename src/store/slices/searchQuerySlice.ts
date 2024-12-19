import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  order: "NUM_VOTE",
  type: "",
  page: 1,
  genreId: "",
  countries: "",
  year: "",
  keyword: "",
};

export const searchQuerySlice = createSlice({
  name: "currentQuerySlice",
  initialState,
  reducers: {
    setSearchQuery: (state, action) => ({
      ...state,
      ...action.payload,
    }),
  },
});

export const { setSearchQuery } = searchQuerySlice.actions;

export default searchQuerySlice.reducer;
