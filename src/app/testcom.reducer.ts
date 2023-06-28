import { createReducer, on } from '@ngrx/store';
import { addDoc } from './testcomp.actions';

export const initialState = [];

const _counterReducer = createReducer(initialState,
  on(addDoc, state => state.push()),
  on(de, state => state - 1),
  on(reset, state => 0),
);

export function counterReducer(state, action) {
  return _counterReducer(state, action);
}

