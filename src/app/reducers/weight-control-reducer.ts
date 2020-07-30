import { ActionReducer, Action, ActionReducerMap } from '@ngrx/store';
import { WeightControlActionTypes, WeightControlAction } from '../actions/weight-control-action-types';
import { SizeItem, Size } from '../models/size';
  
export const initialState = []; //object for the Weight List

export function WeightListReducer(state = initialState, action: WeightControlAction){
    var comboIndex: number;
    var orderIndex: number;
    var size: Size;
    var matCalTypeId: number;  

    if (action.payload != undefined)
    {
      matCalTypeId = action.payload.matCalTypeId;
      comboIndex = action.payload.comboIndex;
      orderIndex = action.payload.orderIndex;
      size = action.payload.size;
      
      console.log(action.type
      + " @ "
      + "combo ID: " + comboIndex
      + ", order ID: " + orderIndex
      + ", size ID: " + size.id
      + ", mat type ID: " + matCalTypeId);
    }

    switch (action.type) {
        case WeightControlActionTypes.Load:
          return state

        case WeightControlActionTypes.UpdateWeightItem:
          break;
        
        case WeightControlActionTypes.UpdateWeightMatCal:
          break;

        case WeightControlActionTypes.UpdateWeightSize:
          break;

        default:
          return state;
    }
}

/*
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
*/

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
      ...new SizeItem(payload.index, payload.size)
    }
  })
}