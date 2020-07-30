import { ActionReducer, Action, ActionReducerMap } from '@ngrx/store';
import { MatCalAction, MatCalActionTypes } from '../actions/mat-cal-action-types';
import { ReducerHelper } from '../share/reducer-helper';
  
export const initialState = 0;

export function MatCalReducer(state = initialState, action: MatCalAction){
  switch (action.type) {
      case MatCalActionTypes.Preload:
        console.log(action.type + ", for preloading TypeId: " + action.payload.typeID);
        //var reducerHelper = new ReducerHelper();
        //state = reducerHelper.deepCopy(action.payload.typeID);
        state = action.payload.typeID;
        return state

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