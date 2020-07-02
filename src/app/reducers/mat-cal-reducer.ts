import { ActionReducer, Action, ActionReducerMap } from '@ngrx/store';
import { MatCalAction, MatCalActionTypes } from '../actions/mat-cal-action-types';
  
export const initialState = 0;

export function MatCalReducer(state = initialState, action: MatCalAction){
  switch (action.type) {
      case MatCalActionTypes.Load:
        console.log(action.type);
        return state

      case MatCalActionTypes.Update:
        console.log(action.type + ", new TypeId: " + action.payload.typeID);
        return action.payload.typeID;
        break;

      default:
        return state;
  }
}