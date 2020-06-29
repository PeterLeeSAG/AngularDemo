import { Action } from '@ngrx/store';
import { Size } from '../models/size';

export enum SizeListActionTypes {
    LoadSizeList = '[Size List] LOAD',
    AddSizeItem = '[Size List] ADD ITEM',
    RemoveSizeItem = '[Size List] REMOVE ITEM',
    UpdateSizeItem = '[Size List] UPDATE ITEM',
    MoveSizeItemUp = '[Size List] MOVE ITEM UP',
    MoveDownSizeItem = '[Size List] MOVE ITEM DOWN',
    CompleteSizeList = '[Size List] COMPLETE',
    ResetSizeList = '[Size List] RESET'
}

export class SizeListAction implements Action {
    type: string;
    payload: {
      index: number,
      sizeId: number,
      error: string
    };
  }

  export class LoadSizeList implements Action {
    readonly type = SizeListActionTypes.LoadSizeList;  
    constructor(readonly payload: {sizeList: Size[]}) {  
    }
  }

  export class AddSizeItem implements Action {
    readonly type = SizeListActionTypes.AddSizeItem;  
    constructor(readonly payload: {index: number}) {
    }
  }

  export class RemoveSizeItem implements Action {
    readonly type = SizeListActionTypes.RemoveSizeItem;  
    constructor(readonly payload: {index: number}) {
    }
  }

  export class UpdateSizeItem implements Action {
    readonly type = SizeListActionTypes.UpdateSizeItem;  
    constructor(readonly payload: {index: number, sizeID: number}) {
    }
  }

  export class MoveSizeItemUp implements Action {
    readonly type = SizeListActionTypes.MoveSizeItemUp;  
    constructor(readonly payload: {index: number}) {
    }
  }

  export class MoveSizeItemDown implements Action {
    readonly type = SizeListActionTypes.MoveDownSizeItem;  
    constructor(readonly payload: {index: number}) {
    }
  }
    
  export type SizeListActions = LoadSizeList;