import { Action } from '@ngrx/store';
import { Size } from '../models/size';

export enum ComboOrderMatrixActionTypes {
    LoadSizeList = '[Combo Order Matrix] LOAD',
    AddCombo = '[Combo Order Matrix] ADD COMBO',
    RemoveCombo = '[Combo Order Matrix] REMOVE COMBO',
    UpdateCombo = '[Combo Order Matrix] UPDATE COMBO',
    MoveComboUp = '[Combo Order Matrix] MOVE COMBO UP',
    MoveComboDown = '[Combo Order Matrix] MOVE COMBO DOWN',

    AddColorOrder = '[Combo Order Matrix] ADD COLOR ORDER',
    RemoveColorOrder = '[Combo Order Matrix] REMOVE COLOR ORDER',
    UpdateColorOrder = '[Combo Order Matrix] UPDATE COLOR ORDER',
    MoveColorOrderUp = '[Combo Order Matrix] MOVE COLOR ORDER UP',
    MoveColorOrderDown = '[Combo Order Matrix] MOVE COLOR ORDER DOWN',

    CompleteSizeList = '[Combo Order Matrix] COMPLETE',
    ResetSizeList = '[Combo Order Matrix] RESET'
}

export class SizeListAction implements Action {
    type: string;
    payload: {
      index: number,
      size: Size,
      error: string
    };
  }

  export class LoadSizeList implements Action {
    readonly type = ComboOrderMatrixActionTypes.LoadSizeList;  
    constructor(readonly payload: {sizeList: Size[]}) {  
    }
  }

  export class AddCombo implements Action {
    readonly type = ComboOrderMatrixActionTypes.AddCombo;  
    constructor(readonly payload: {index: number}) {
    }
  }

  export class RemoveCombo implements Action {
    readonly type = ComboOrderMatrixActionTypes.RemoveCombo;  
    constructor(readonly payload: {index: number}) {
    }
  }

  export class UpdateCombo implements Action {
    readonly type = ComboOrderMatrixActionTypes.UpdateCombo;  
    constructor(readonly payload: {index: number, size: Size}) {
    }
  }

  export class MoveComboUp implements Action {
    readonly type = ComboOrderMatrixActionTypes.MoveComboUp;  
    constructor(readonly payload: {index: number}) {
    }
  }

  export class MoveComboDown implements Action {
    readonly type = ComboOrderMatrixActionTypes.MoveComboDown;  
    constructor(readonly payload: {index: number}) {
    }
  }
    
  export type SizeListActions = LoadSizeList;