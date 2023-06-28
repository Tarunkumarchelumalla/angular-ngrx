import { createReducer, on } from '@ngrx/store';
import { addDoc } from './testcomp.actions';

export interface Docs {
  docs: any[];
}

export const initialState: Docs = {
  docs: [],
  // error: null,
  // status: 'pending',
};

export const testReducer = createReducer(
  initialState,
  on(addDoc, (state, { docs }) => ({
    // state is previous values and docs that is passed by the user
    docs: [...state.docs, { docs: docs }], // docs is passed and appended
  }))
);
