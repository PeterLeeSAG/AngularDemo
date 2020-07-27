import { Action } from '@ngrx/store';
import { MatCalType } from '../models/matCalType';

export enum MatCalActionTypes {
  Preload = "[Mat Cal] PRELOAD",
  Load = '[Mat Cal] LOAD',
  Update = '[Mat Cal] UPDATE',
}

export class MatCalAction implements Action {
  type: string;
  payload: {
    typeID: number,
    error: string
  };
}

export class PreloadMatCal implements Action {
  readonly type = MatCalActionTypes.Preload;  
  constructor(readonly payload: {typeID: number}) {
  }
}

export class LoadMatCal implements Action {
  readonly type = MatCalActionTypes.Load;  
  constructor(readonly payload: {}) {  
  }
}

export class UpdateMatCal implements Action {
  readonly type = MatCalActionTypes.Update;  
  constructor(readonly payload: {typeID: number}) {
  }
}