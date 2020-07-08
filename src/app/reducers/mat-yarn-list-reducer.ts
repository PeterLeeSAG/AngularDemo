import { ActionReducer, Action, ActionReducerMap } from '@ngrx/store';
import { MaterialYarn } from '../models/materialYarn';
import { MatYarnListActionTypes, MatYarnListAction } from '../actions/mat-yarn-list-action-types';
  
export const initialState = []; //list of generic type

export function MatYarnListReducer(state = initialState, action: MatYarnListAction){
    var index: number;
    index = action.payload.index;
    console.log(action.type + " @ " + index);

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
          break;

        case MatYarnListActionTypes.RemoveMatYarn:
          return [
            ...state.slice(0, index),
            ...state.slice(index + 1)
          ];
          break;

        case MatYarnListActionTypes.UpdateMatYarn:
          return updateMatYarn(state, action.payload);

        default:
          return state;
    }
}

//Internal functions for size item list
function sizeRemoved(state: MaterialYarn[], listID: number) : MaterialYarn[]
{
  const array = [...state];
  //remove a item at the position id
  array.splice(listID, 1);

  return array;
}

function sizeAdded(state: MaterialYarn[], listID: number) : MaterialYarn[]
{
  const array = [...state];

  //-1 <- end of the array
  //0  <- head of the array
  //insert a item at the position id
  if (listID != -1)
  {
    array.splice(listID, 0, new MaterialYarn(listID, 0));
  }
  else
  {
    var newItem = new MaterialYarn(listID, 0);
    array.push(newItem);
  }

  return array;
}

function immutablySwapItems(items, firstIndex, secondIndex) {
  // Constant reference - we can still modify the array itself
  const results= items.slice();
  const firstItem = items[firstIndex];
  results[firstIndex] = items[secondIndex];
  results[secondIndex] = firstItem;

  return results;
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