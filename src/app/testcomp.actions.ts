import { createAction } from '@ngrx/store';
import { props } from '@ngrx/store/src/action_creator';

// export const increment = createAction('[Counter Component] Increment');
// export const decrement = createAction('[Counter Component] Decrement');
// export const reset = createAction('[Counter Component] Reset');

export const addDoc = createAction('[TestComp Compoenent] AddDoc',

  props<{docs:Record<string,any>}>

);
export const removeDoc = createAction('[TestComp Component] RemoveDoc');


