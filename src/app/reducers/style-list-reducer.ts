import { ActionReducer, Action, ActionReducerMap } from '@ngrx/store';
import { StyleInfo } from '../models/styleInfo';
import { ReducerHelper } from '../share/reducer-helper';
import { StyleListActionTypes, StyleListAction } from '../actions/style-list-action-types';
  
export const initialState = [];

export function StyleListReducer(state = initialState, action: StyleListAction){
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
    var selectStyle : StyleInfo;
    
    switch (action.type) {
        case StyleListActionTypes.LoadStyleList:
          return state

        case StyleListActionTypes.AddStyleItem:
          if (index == -1)
          {
            return [...state, new StyleInfo(state.length + ') factory number...', 0)];
          }
          else
          {
            return [
              ...state.slice(0, index),
              new StyleInfo('', 0), //new empty style info
              ...state.slice(index)
            ];
          }
        
        case StyleListActionTypes.RemoveStyleItem:
          return [
            ...state.slice(0, index),
            ...state.slice(index + 1)
          ];
          break;

      
        case StyleListActionTypes.UpdateStyleItem:
          selectStyle = action.payload.style;
          // console.log(selectStyle);
          // console.log(selectStyle.factoryStyleNumber);          
          // console.log(selectStyle.calculationTypeId);
          
          return updateStyle(state, 
            action.payload.index, 
            selectStyle.factoryStyleNumber, 
            selectStyle.calculationTypeId
            );

        default:
          return state;
    }
}

//Internal functions for Style item list
function StyleRemoved(state: StyleInfo[], listID: number) : StyleInfo[]
{
  const array = [...state];
  //remove a item at the position id
  array.splice(listID, 1);

  return array;
}

function StyleAdded(state: StyleInfo[], listID: number) : StyleInfo[]
{
  const array = [...state];

  //-1 <- end of the array
  //0  <- head of the array
  //insert a item at the position id
  if (listID != -1)
  {
    array.splice(listID, 0, new StyleInfo('', 0));
  }
  else
  {
    var newStyle = new StyleInfo('', 0);
    array.push(newStyle);
  }

  return array;
}

function updateStyle(array, itemIndex:number, factoryStyleNumber: string, calculationTypeId: number)
{
  return array.map((item, index) => {
    if (index !== itemIndex) {
      // This isn't the item we care about - keep it as-is
      return item
    }

    // Otherwise, this is the one we want - return an updated value
    return {
      ...item,
      //...style
      ...new StyleInfo(factoryStyleNumber, calculationTypeId)
    }
  })
}