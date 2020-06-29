import { ActionReducer, Action, ActionReducerMap } from '@ngrx/store';
import { SizeItem } from '../models/size';
import { SizeListActionTypes, SizeListAction } from '../actions/size-list-action-types';

export interface SizeListState {
    SizeList: SizeItem[]| null;
}
  
export const initialSizeListState: SizeListState = {
    SizeList: [new SizeItem(1, 0)],
};

export function SizeListReducer(state: SizeListState = initialSizeListState, action: SizeListAction) {
    switch (action.type) {
        case SizeListActionTypes.LoadSizeList:
        return state

        case SizeListActionTypes.AddSizeItem:
        sizeAdded(state, action.payload.index);

        case SizeListActionTypes.RemoveSizeItem:
        sizeRemoved(state, action.payload.index);

        case SizeListActionTypes.MoveSizeItemUp:
        moveSize(state, action.payload.index, "up");

        case SizeListActionTypes.MoveDownSizeItem:
        moveSize(state, action.payload.index, "down");

        case SizeListActionTypes.UpdateSizeItem:
        updateSize(state, action.payload.index, action.payload.sizeId);

        default:
        return state;
    }
}

//Internal functions for size item list
function sizeRemoved(stage : SizeListState, listID: number)
{
  //remove a item at the position id
  stage.SizeList.splice(listID, 1);
  reorderListID(stage);
}

function sizeAdded(stage : SizeListState, listID: number)
{
  //-1 <- end of the array
  //0 <- head of the array
  //insert a item at the position id
  if (listID != -1)
  {
    stage.SizeList.splice(listID, 0, new SizeItem(listID, 0));
  }
  else
  {
    stage.SizeList.push(new SizeItem(listID, 0));
  }
  
  reorderListID(stage);
}

function reorderListID(stage : SizeListState)
{
  var listID = 1;
  for (let index = 0; index < stage.SizeList.length; index++) {
    const element = stage.SizeList[index];
    element.listID = listID;
    listID++;
  }
}

function moveSize(stage : SizeListState, listID : number, direction : string)
{
  var targetSizeIndex = stage.SizeList.findIndex(item => item.listID === listID);

  if (direction.toLowerCase() == "up")
  {
    if (targetSizeIndex > 0)
    {
      var tempSizeItem = stage.SizeList[targetSizeIndex-1];
      stage.SizeList[targetSizeIndex-1] = stage.SizeList[targetSizeIndex];
      stage.SizeList[targetSizeIndex] = tempSizeItem;
    }
  }
  else if (direction.toLowerCase() == "down")
  { 
    if (targetSizeIndex < stage.SizeList.length-1)
    {
      var tempSizeItem = stage.SizeList[targetSizeIndex+1];
      stage.SizeList[targetSizeIndex+1] = stage.SizeList[targetSizeIndex];
      stage.SizeList[targetSizeIndex] = tempSizeItem;
    }
  }
}

function updateSize(stage : SizeListState, listID : number, sizeID : number)
{
    var targetSizeIndex = stage.SizeList.findIndex(item => item.listID === listID);
    if (targetSizeIndex > 0)
    {
      stage.SizeList[targetSizeIndex].sizeID = sizeID;
    }
}