import { Action } from '@ngrx/store';
import { StyleInfo } from '../models/styleInfo';

export enum StyleListActionTypes {
    LoadStyleList = '[Style List] LOAD',
    AddStyleItem = '[Style List] ADD ITEM',
    EditStyleItem = '[Style List] EDIT ITEM', //For start the edit mode for the style item
    RemoveStyleItem = '[Style List] REMOVE ITEM',
    UpdateStyleItem = '[Style List] UPDATE ITEM',
}

export class StyleListAction implements Action {
    type: string;
    payload: {
      index: number,
      style: StyleInfo,
      styleList: StyleInfo[],
      error: string
    };
  }

  export class LoadStyleList implements Action {
    readonly type = StyleListActionTypes.LoadStyleList;  
    constructor(readonly payload: {styleList: StyleInfo[]}) {  
    }
  }

  export class AddStyleItem implements Action {
    readonly type = StyleListActionTypes.AddStyleItem;  
    constructor(readonly payload: {index: number}) {
    }
  }

  export class RemoveStyleItem implements Action {
    readonly type = StyleListActionTypes.RemoveStyleItem;  
    constructor(readonly payload: {index: number}) {
    }
  }

  export class UpdateStyleItem implements Action {
    readonly type = StyleListActionTypes.UpdateStyleItem;  
    constructor(readonly payload: {index: number, style: StyleInfo}) {
    }
  }
    
  export type StyleListActions = LoadStyleList;