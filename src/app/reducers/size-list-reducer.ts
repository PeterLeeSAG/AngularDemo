import { ActionReducer, Action, ActionReducerMap } from '@ngrx/store';
import { SizeItem } from '../models/size';
import { SizeListState } from '../models/sizeListState';
import { SizeListActionTypes, SizeListAction } from '../actions/size-list-action-types';
  
export const initialState = [];

export function SizeListReducer(state = initialState, action: SizeListAction) {

    // Array.prototype.swapItems = function(a, b){
    //   this[a] = this.splice(b, 1, this[a])[0];
    //   return this;
    // }   
    var index: number;

    switch (action.type) {
        case SizeListActionTypes.LoadSizeList:
        return state

        case SizeListActionTypes.AddSizeItem:
        console.log("ADD Size @ " + action.payload.index);
        //return sizeAdded(state, action.payload.index);
        if (action.payload.index == -1)
        {
          return [...state, new SizeItem(action.payload.index, 0)];
        }
        else
        {
          return [
            ...state.slice(0, action.payload.index),
            new SizeItem(action.payload.index, 0),
            ...state.slice(action.payload.index)
          ];
        }
        
        //return state;
        //return reorderListID([...state, new SizeItem(action.payload.index, 0)]);

        case SizeListActionTypes.RemoveSizeItem:
        return [
          ...state.slice(0, action.payload.index),
          ...state.slice(action.payload.index + 1)
        ];
        break;

        case SizeListActionTypes.MoveSizeItemUp:
        index = action.payload.index;
        if (index != 0)
        {
          console.log("move up @ index " + index);
          return immutablySwapItems(state, index-1, index);
        }
        else
        {
          return state;
        }
        break;

        case SizeListActionTypes.MoveDownSizeItem:
        index = action.payload.index;
        if (index != state.length-1)
        {
          console.log("move down @ index " + index);
          return immutablySwapItems(state, index+1, index);
        }
        else
        {
          return state;
        }
        break;

        case SizeListActionTypes.UpdateSizeItem:
        return updateSize(state, action.payload);

        default:
        return state;
    }
}

//Internal functions for size item list
function sizeRemoved(state: SizeItem[], listID: number) : SizeItem[]
{
  const array = [...state];
  //remove a item at the position id
  array.splice(listID, 1);

  return reorderListID(array);
}

function sizeAdded(state: SizeItem[], listID: number) : SizeItem[]
{
  const array = [...state];

  //-1 <- end of the array
  //0  <- head of the array
  //insert a item at the position id
  if (listID != -1)
  {
    array.splice(listID, 0, new SizeItem(listID, 0));
  }
  else
  {
    var newItem = new SizeItem(listID, 0);
    array.push(newItem);
    //state = [...state, newItem];
  }
  
  return reorderListID(array);
}

function reorderListID(state : SizeItem[]) : SizeItem[]
{
  var listID = 1;
  for (let index = 0; index < state.length; index++) {
    const element = state[index];
    element.listID = listID;
    listID++;
  }

  return state;
}

function immutablySwapItems(items, firstIndex, secondIndex) {
  // Constant reference - we can still modify the array itself
  const results= items.slice();
  const firstItem = items[firstIndex];
  results[firstIndex] = items[secondIndex];
  results[secondIndex] = firstItem;

  return results;
}

function updateSize(array, payload)
{
  return array.map((item, index) => {
    if (index !== payload.index) {
      // This isn't the item we care about - keep it as-is
      return item
    }

    // Otherwise, this is the one we want - return an updated value
    return {
      ...item,
      ...new SizeItem(payload.index, payload.sizeID)
    }
  })
}