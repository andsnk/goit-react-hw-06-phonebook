import { createSlice } from '@reduxjs/toolkit';

export const filterSlice = createSlice({
  name: 'filter',
  initialState: '',
  reducers: {
    filterContacts: (_, action) => {
      return action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { filterContacts } = filterSlice.actions;

export const filterReducer = filterSlice.reducer;
