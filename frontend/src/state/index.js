import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  //setting color state using color theme setting
  mode: "dark",
};

export const globalSlice = createSlice({
  name: "global",
  initialState,
  reducers: {
    setMode: (state) => {
      state.mode = state.mode === "light" ? "dark" : "light";
    },
  },
});

export const { setMode } = globalSlice.actions;

export default globalSlice.reducer;
