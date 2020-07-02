import { ActionReducer, Action, ActionReducerMap } from '@ngrx/store';
import { WeightListActionTypes, WeightListAction } from '../actions/weight-list-action-types';
import { SizeItem } from '../models/size';
  
export const initialState = []; //object for the Weight List

export function WeightListReducer(state = initialState, action: WeightListAction){
    var matCalTypeId: number;  
    var comboIndex: number;
    var orderIndex: number;
    var sizeId: number;
    var sizeItemList: SizeItem[]; //For the size item list of the yarn order
    
    matCalTypeId = action.payload.matCalTypeId;
    comboIndex = action.payload.comboIndex;
    orderIndex = action.payload.orderIndex;
    sizeId = action.payload.sizeId;

    switch (action.type) {
        case WeightListActionTypes.Load:
          return state

        case WeightListActionTypes.UpdateWeightItem:
          console.log("Update Weight Item @ "
                      +"combo ID: " + comboIndex
                      + ", order ID: " + orderIndex
                      + ", size ID: " + sizeId
                      + ", mat type ID: " + matCalTypeId);
          break;
        
        case WeightListActionTypes.UpdateWeightMatCal:
          console.log("Update Weight Material Calculation @ "
                      +"combo ID: " + comboIndex
                      + ", order ID: " + orderIndex
                      + ", size ID: " + sizeId
                      + ", mat type ID: " + matCalTypeId);
          break;

        case WeightListActionTypes.UpdateWeightSize:
          console.log("Update Weight size @ "
                      +"combo ID: " + comboIndex
                      + ", order ID: " + orderIndex
                      + ", size ID: " + sizeId
                      + ", mat type ID: " + matCalTypeId);
          break;

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