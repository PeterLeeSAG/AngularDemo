import { Action } from '@ngrx/store';
import { MaterialYarn } from '../models/materialYarn';

export enum MatYarnListActionTypes {
  LoadList = '[Mat Yarn List] LOAD',
  AddMatYarn = '[Mat Yarn List] ADD ITEM',
  CopyMatYarn = '[Mat Yarn List] COPY ITEM',
  RemoveMatYarn = '[Mat Yarn List] REMOVE ITEM',
  UpdateMatYarn = '[Mat Yarn List] UPDATE ITEM',

}

export class MatYarnListAction implements Action {
    type: string;
    payload: {
      index: number,
      matYarn: MaterialYarn,
      error: string
    };
  }

  export class LoadMatYarnList implements Action {
    readonly type = MatYarnListActionTypes.LoadList;  
    constructor(readonly payload: {matYarnList: MaterialYarn[]}) {  
    }
  }

  export class AddMatYarn implements Action {
    readonly type = MatYarnListActionTypes.AddMatYarn;  
    constructor(readonly payload: {index: number}) {
    }
  }

  export class CopyMatYarn implements Action {
    readonly type = MatYarnListActionTypes.CopyMatYarn;  
    constructor(readonly payload: {index: number, matYarn: MaterialYarn}) {
    }
  }

  export class RemoveMatYarn implements Action {
    readonly type = MatYarnListActionTypes.RemoveMatYarn;  
    constructor(readonly payload: {index: number}) {
    }
  }

  export class UpdateMatYarn implements Action {
    readonly type = MatYarnListActionTypes.UpdateMatYarn;  
    constructor(readonly payload: {index: number, matYarn: MaterialYarn}) {
    }
  }
    
  export type MatYarnListActions = LoadMatYarnList;