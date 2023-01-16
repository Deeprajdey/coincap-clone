import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cryptoData: [],
  isLoading: false,
  error: null,
};

export const cryptoTableSlice = createSlice({
  name: "cryptoTable",
  initialState,
  reducers: {
    getDataFetch: (state) => {
      state.isLoading = true;
    },
    getDataSuccess: (state, action) => {
      state.cryptoData = action.payload;
      state.isLoading = false;
    },
    getDataFailure: (state, action) => {
      state.error = action.payload;
      state.isLoading = false;
    },
  },
});

export const { getDataFetch, getDataSuccess, getDataFailure } =
  cryptoTableSlice.actions;

export default cryptoTableSlice.reducer;
