import { ActionReducer, Action, ActionReducerMap } from '@ngrx/store';
import { SizeItem } from '../models/size';
import { SizeListState } from '../models/sizeListState';
import { SizeListActionTypes, SizeListAction } from '../actions/size-list-action-types';
  
export const initialState = [];

export function SizeListReducer(state = initialState, action: SizeListAction) {
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
        //return sizeRemoved(state, action.payload.index);
        //return state;

        case SizeListActionTypes.MoveSizeItemUp:
        return moveSize(state, action.payload.index, "up");
        //return state;

        case SizeListActionTypes.MoveDownSizeItem:
        return moveSize(state, action.payload.index, "down");
        //return state;

        case SizeListActionTypes.UpdateSizeItem:
        return updateSize(state, action.payload);
        //return state;

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

function moveSize(state: SizeItem[], listID : number, direction : string) : SizeItem[]
{
  const array = [...state];

  var targetSizeIndex = array.findIndex(item => item.listID === listID);

  if (direction.toLowerCase() == "up")
  {
    if (targetSizeIndex > 0)
    {
      var tempSizeItem = array[targetSizeIndex-1];
      array[targetSizeIndex-1] = array[targetSizeIndex];
      array[targetSizeIndex] = tempSizeItem;
    }
  }
  else if (direction.toLowerCase() == "down")
  { 
    if (targetSizeIndex < array.length-1)
    {
      var tempSizeItem = array[targetSizeIndex+1];
      array[targetSizeIndex+1] = array[targetSizeIndex];
      array[targetSizeIndex] = tempSizeItem;
    }
  }

  return array;
}

function updateSize(state, payload) : SizeItem[]
{
    const array = [...state];
    var targetSizeIndex = array.findIndex(item => item.listID === payload.listID);
    if (targetSizeIndex > 0)
    {
      array[targetSizeIndex].sizeID = payload.sizeID;
    }

    return array;
}