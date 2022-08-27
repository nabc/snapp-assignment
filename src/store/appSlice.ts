import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "./index";

interface appState {
  frequentContacts: any[];
}

const initialState: appState = {
  frequentContacts: [],
};

export const appSlice = createSlice({
  name: "app",
  initialState,
  reducers: {
    setSelectedApp: (state, action) => {
      state.frequentContacts = action.payload;
    },
  },
});

export const { setSelectedApp } = appSlice.actions;

export const selectApp = (state: RootState) => state.app.frequentContacts;

export default appSlice.reducer;
