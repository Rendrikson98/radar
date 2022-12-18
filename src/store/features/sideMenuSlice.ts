import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { SideMenuModel } from '../../models/sideMenuModel';

const initialState: SideMenuModel[] = [
  {
    id: 0,
    name: 'Status',
    isOpen: false,
    options: [
      {
        name: 'Open',
        selected: false,
      },
      {
        name: 'Closed',
        selected: false,
      },
      {
        name: 'Escalated',
        selected: false,
      },
    ],
  },
  {
    id: 1,
    name: 'Time',
    isOpen: false,
  },
  {
    id: 2,
    name: 'Assignee',
    isOpen: false,
  },
  {
    id: 3,
    name: 'Watcher',
    isOpen: false,
  },
  {
    id: 4,
    name: 'Counterparty',
    isOpen: false,
  },
  {
    id: 5,
    name: 'Saverity',
    isOpen: false,
  },
  {
    id: 6,
    name: 'Source',
    isOpen: false,
  },
  {
    id: 7,
    name: 'Trader',
    isOpen: false,
  },
];

const sideMenuSlice = createSlice({
  name: 'OPEN_OR_CLOSE_PROPERTIES',
  initialState,
  reducers: {
    openOrCloseProperties(
      state: SideMenuModel[],
      action: PayloadAction<number>
    ) {
      state[action.payload].isOpen = !state[action.payload].isOpen;
    },
  },
});

export const { openOrCloseProperties } = sideMenuSlice.actions;
export default sideMenuSlice.reducer;
