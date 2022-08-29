import { createSlice } from "@reduxjs/toolkit";
import { ContactModel } from "types";
import { RootState } from "./index";

interface appState {
  frequentContacts: ContactModel[];
}

const initialState: appState = {
  frequentContacts: [],
};

export const appSlice = createSlice({
  name: "app",
  initialState,
  reducers: {
    updateFrequentContact: (state, action) => {
      const currentFrequentContacts = state.frequentContacts;
      if (currentFrequentContacts.length === 4) {
        currentFrequentContacts.pop();
      }
      currentFrequentContacts.unshift(action.payload);
      state.frequentContacts = currentFrequentContacts;
    },
  },
});

export const { updateFrequentContact } = appSlice.actions;

export const selectFrequentContacts = (state: RootState) => state.app.frequentContacts;

export default appSlice.reducer;
