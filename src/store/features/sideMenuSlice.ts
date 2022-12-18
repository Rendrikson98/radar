import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { SideMenuModel } from '../../models/sideMenuModel';

const initialState: SideMenuModel[] = [
  {
    id: 0,
    name: 'Status',
    isOpen: false,
    options: [
      {
        id: 0,
        name: 'Open',
        selected: false,
      },
      {
        id: 1,
        name: 'Closed',
        selected: false,
      },
      {
        id: 2,
        name: 'Escalated',
        selected: false,
      },
    ],
  },
  {
    id: 1,
    name: 'Time',
    isOpen: false,
    options: [],
  },
  {
    id: 2,
    name: 'Assignee',
    isOpen: false,
    options: [],
  },
  {
    id: 3,
    name: 'Watcher',
    isOpen: false,
    options: [],
  },
  {
    id: 4,
    name: 'Counterparty',
    isOpen: false,
    options: [],
  },
  {
    id: 5,
    name: 'Saverity',
    isOpen: false,
    options: [],
  },
  {
    id: 6,
    name: 'Source',
    isOpen: false,
    options: [],
  },
  {
    id: 7,
    name: 'Trader',
    isOpen: false,
    options: [],
  },
];

const sideMenuSlice = createSlice({
  name: 'sideMenuSlice',
  initialState,
  reducers: {
    openOrCloseProperties(
      state: SideMenuModel[],
      action: PayloadAction<number>
    ) {
      state[action.payload].isOpen = !state[action.payload].isOpen;
    },
    activeOption(
      state: SideMenuModel[],
      action: PayloadAction<{ indexPropertie: number; indexOption: number }>
    ) {
      state[action.payload.indexPropertie].options[
        action.payload.indexOption
      ].selected =
        !state[action.payload.indexPropertie].options[
          action.payload.indexOption
        ].selected;
    },
  },
});

export const { openOrCloseProperties, activeOption } = sideMenuSlice.actions;
export default sideMenuSlice.reducer;
