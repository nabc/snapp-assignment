import { createSlice } from "@reduxjs/toolkit";
import { ContactModel } from "types";
import { RootState } from "./index";

interface appState {
  frequentContacts: ContactModel[];
  searchQuery: string;
}

const initialState: appState = {
  frequentContacts: [],
  searchQuery: "limit=12&skip=0",
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
      console.log("currentFrequentContacts", currentFrequentContacts);

      state.frequentContacts = currentFrequentContacts;
    },
    setSearchQuery: (state, action) => {
      state.searchQuery = action.payload;
    },
  },
});

export const { updateFrequentContact, setSearchQuery } = appSlice.actions;

export const selectFrequentContacts = (state: RootState) => state.app.frequentContacts;
export const selectSearchQuery = (state: RootState) => state.app.searchQuery;

export default appSlice.reducer;
