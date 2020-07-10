import { ActionReducer, Action, ActionReducerMap } from '@ngrx/store';
import { MaterialYarn } from '../models/materialYarn';
import { MatYarnListActionTypes, MatYarnListAction } from '../actions/mat-yarn-list-action-types';
  
export const initialState = []; //list of generic type

export function MatYarnListReducer(state = initialState, action: MatYarnListAction){
    const isDebug: boolean = true;  
    var index: number;
    var matYarn: MaterialYarn;

    if (action.payload !== undefined && action.payload.index !== undefined)
    {
      index = action.payload.index;
      matYarn = action.payload.matYarn;
      console.log(action.type + " @ " + index);
    }
    else
    {
      console.log("Action is not valid for the Material Yarn List");
    }

    switch (action.type) {
        case MatYarnListActionTypes.LoadList:
          return state

        case MatYarnListActionTypes.AddMatYarn:
          if (index == -1)
          {
            return [...state, new MaterialYarn(index, 0)];
          }
          else
          {
            return [
              ...state.slice(0, index),
              new MaterialYarn(index, 0),
              ...state.slice(index)
            ];
          }

        case MatYarnListActionTypes.CopyMatYarn:
          if (isDebug)
          {
            console.log("CopyMatYarn @" + index);
            console.log([
              ...state.slice(0, index+1),
              ...state.slice(index, index+1),
              ...state.slice(index+1)
            ]);
          }
          
          return [
            ...state.slice(0, index+1),
            ...state.slice(index, index+1),
            ...state.slice(index+1)
          ];

        case MatYarnListActionTypes.RemoveMatYarn:
          return [
            ...state.slice(0, index),
            ...state.slice(index + 1)
          ];

        case MatYarnListActionTypes.UpdateMatYarn:
          if (isDebug==true)
          {
            console.log("UpdateMatYarn @" + action.payload.matYarn.article);
          }
          return updateMatYarn(state, action.payload);

        default:
          return state;
    }
}

function updateMatYarn(array, payload)
{
  return array.map((item, index) => {
    if (index !== payload.index) {
      // This isn't the item we care about - keep it as-is
      return item
    }

    // Otherwise, this is the one we want - return an updated value
    return {
      ...item,
      ...payload.matYarn
    }
  })
}