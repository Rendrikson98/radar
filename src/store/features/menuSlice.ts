import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { menuModel } from '../../models';

const initialState: menuModel = {
  searchTitle: '',
};

const menuSlice = createSlice({
  name: 'menuSlice',
  initialState,
  reducers: {
    handleSearchTitle(state: menuModel, action: PayloadAction<string>) {
      state.searchTitle = action.payload;
    },
  },
});

export const { handleSearchTitle } = menuSlice.actions;
export default menuSlice.reducer;
