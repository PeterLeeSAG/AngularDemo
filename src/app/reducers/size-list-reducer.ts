import { ActionReducer, Action, ActionReducerMap } from '@ngrx/store';
import { SizeItem, Size } from '../models/size';
import { ReducerHelper } from '../share/reducer-helper';
import { SizeListActionTypes, SizeListAction } from '../actions/size-list-action-types';
  
export const initialState = [];

export function SizeListReducer(state = initialState, action: SizeListAction){
    var index: number;
    var reducerHelper = new ReducerHelper();
    if (action.payload !== undefined && action.payload.index !== undefined)
    {
      index = action.payload.index;
      console.log(action.type + " @ " + index);
    }
    else
    {
      console.log("Action is not valid for the Sizing List");
    }
    var selectSize : Size;
    
    switch (action.type) {
        case SizeListActionTypes.LoadSizeList:
          return state

        case SizeListActionTypes.AddSizeItem:
          if (index == -1)
          {
            return [...state, new SizeItem(index, null)];
          }
          else
          {
            return [
              ...state.slice(0, index),
              new SizeItem(index, null),
              ...state.slice(index)
            ];
          }
        
        case SizeListActionTypes.RemoveSizeItem:
          return [
            ...state.slice(0, index),
            ...state.slice(index + 1)
          ];
          break;

        case SizeListActionTypes.MoveSizeItemUp:
          if (index != 0)
          {
            console.log("move up @ index " + index);
            return reducerHelper.immutablySwapItems(state, index-1, index);
          }
          else
          {
            return state;
          }
          break;

        case SizeListActionTypes.MoveSizeItemDown:
          if (index != state.length-1)
          {
            console.log("move down @ index " + index);
            return reducerHelper.immutablySwapItems(state, index+1, index);
          }
          else
          {
            return state;
          }
          break;

        case SizeListActionTypes.UpdateSizeItem:
          selectSize = action.payload.size;
          console.log(selectSize);
          return updateSize(state, action.payload.index, selectSize);

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
    array.splice(listID, 0, new SizeItem(listID, null));
  }
  else
  {
    var newItem = new SizeItem(listID, null);
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

function updateSize(array, itemIndex:number, size:Size)
{
  return array.map((item, index) => {
    if (index !== itemIndex) {
      // This isn't the item we care about - keep it as-is
      return item
    }

    // Otherwise, this is the one we want - return an updated value
    return {
      ...item,
      ...new SizeItem(itemIndex, size)
    }
  })
}