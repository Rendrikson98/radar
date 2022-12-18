import { updateObject } from '../../helpers/updateObject';
import { SideMenuModel } from '../../models/sideMenuModel';
import { ActionTypes } from '../actions/action-types';

const initialState: SideMenuModel[] = [
  {
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
    name: 'Time',
    isOpen: false,
  },
  {
    name: 'Assignee',
    isOpen: false,
  },
  {
    name: 'Watcher',
    isOpen: false,
  },
  {
    name: 'Counterparty',
    isOpen: false,
  },
  {
    name: 'Saverity',
    isOpen: false,
  },
  {
    name: 'Source',
    isOpen: false,
  },
  {
    name: 'Trader',
    isOpen: false,
  },
];

export const sideMenuReducer = (state = initialState, action: any) => {
  switch (action.type) {
    default:
      return state;
  }
};
