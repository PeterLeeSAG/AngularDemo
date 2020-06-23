import { ActionReducerMap, MetaReducer, Action} from '@ngrx/store';
import { Size, SizeItem } from '../models/size';
import { SizeListActionTypes, SizeListAction } from '../actions/size-list-action-types';

export interface SizeListState {
    SizeList: SizeItem[]| null;
    error: string| null;
}
  
const initialSizeListState: SizeListState = {
    SizeList: [new SizeItem(1, 0)],
    error: null
};

export function sizeListReducer(state: SizeListState = initialSizeListState, action: SizeListAction): SizeListState {
    switch (action.type) {
        case SizeListActionTypes.LoadSizeList:
        return {
            SizeList: state.SizeList,
            error: null
        };

        case SizeListActionTypes.AddSizeItem:
        sizeAdded(state.SizeList, action.payload.index);
        return {
            SizeList: state.SizeList,
            error: action.payload.error
        };

        case SizeListActionTypes.RemoveSizeItem:
        sizeRemoved(state.SizeList, action.payload.index);
        return {
            SizeList: state.SizeList,
            error: action.payload.error
        };

        case SizeListActionTypes.MoveUpSizeItem:
        moveSize(state.SizeList, action.payload.index, "up");
        return {
            SizeList: state.SizeList,
            error: action.payload.error
        };

        case SizeListActionTypes.MoveDownSizeItem:
        moveSize(state.SizeList, action.payload.index, "down");
        return {
            SizeList: state.SizeList,
            error: action.payload.error
        };

        case SizeListActionTypes.UpdateSizeItem:
        updateSize(state.SizeList, action.payload.index, action.payload.sizeData.id);
        return {
            SizeList: state.SizeList,
            error: action.payload.error
        };

        default:
        return state;
    }
}

//Internal functions for size item list
function sizeRemoved(sizeList: SizeItem[], listID: number)
{
  //remove a item at the position id
  sizeList.splice(listID, 1);
  reorderListID(sizeList);
}

function sizeAdded(sizeList: SizeItem[], listID: number)
{
  //insert a item at the position id
  sizeList.splice(listID, 0, new SizeItem(listID, 0));
  reorderListID(sizeList);
}

function reorderListID(sizeList: SizeItem[])
{
  var listID = 1;
  for (let index = 0; index < sizeList.length; index++) {
    const element = sizeList[index];
    element.listID = listID;
    listID++;
  }
}

function moveSize(sizeList: SizeItem[], listID : number, direction : string)
{
  var targetSizeIndex = sizeList.findIndex(item => item.listID === listID);

  if (direction.toLowerCase() == "up")
  {
    if (targetSizeIndex > 0)
    {
      var tempSizeItem = sizeList[targetSizeIndex-1];
      sizeList[targetSizeIndex-1] = sizeList[targetSizeIndex];
      sizeList[targetSizeIndex] = tempSizeItem;
    }
  }
  else if (direction.toLowerCase() == "down")
  { 
    if (targetSizeIndex < sizeList.length-1)
    {
      var tempSizeItem = sizeList[targetSizeIndex+1];
      sizeList[targetSizeIndex+1] = sizeList[targetSizeIndex];
      sizeList[targetSizeIndex] = tempSizeItem;
    }
  }
}

function updateSize(sizeList: SizeItem[], listID : number, sizeID : number)
{
    var targetSizeIndex = sizeList.findIndex(item => item.listID === listID);
    if (targetSizeIndex > 0)
    {
        sizeList[targetSizeIndex].sizeID = sizeID;
    }
}