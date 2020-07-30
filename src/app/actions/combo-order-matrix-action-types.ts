import { Action } from '@ngrx/store';
import { Size } from '../models/size';
import { Combo } from '../models/combo';
import { ColorOrder } from '../models/colorOrder';
import { ComboOrderDetail } from '../models/comboOrderDetail';

export enum ComboOrderMatrixActionTypes {
    //COMBO
    LoadComboList = '[Combo Order Matrix] LOAD COMBO',
    AddCombo = '[Combo Order Matrix] ADD COMBO',
    RemoveCombo = '[Combo Order Matrix] REMOVE COMBO',
    UpdateCombo = '[Combo Order Matrix] UPDATE COMBO',
    MoveComboUp = '[Combo Order Matrix] MOVE COMBO UP',
    MoveComboDown = '[Combo Order Matrix] MOVE COMBO DOWN',

    //COLOR ORDER
    LoadColorOrderList = '[Combo Order Matrix] LOAD COLOR ORDER',
    AddColorOrder = '[Combo Order Matrix] ADD COLOR ORDER',
    RemoveColorOrder = '[Combo Order Matrix] REMOVE COLOR ORDER',
    UpdateColorOrder = '[Combo Order Matrix] UPDATE COLOR ORDER',
    MoveColorOrderUp = '[Combo Order Matrix] MOVE COLOR ORDER UP',
    MoveColorOrderDown = '[Combo Order Matrix] MOVE COLOR ORDER DOWN',

    //COLOR ORDER DETAILS
    LoadColorOrderDetail = '[Combo Order Matrix] Load Color Order details',
    UpdateColorOrderDetail = '[Combo Order Matrix] UPDATE COLOR ORDER DETAILS',

    //WHOLE MATRIX
    PreloadMatrix = '[Combo Order Matrix] RELOAD',
    CompleteMatrix = '[Combo Order Matrix] COMPLETE',
    ResetMatrix = '[Combo Order Matrix] RESET'
}

export class SizeListAction implements Action {
    type: string;
    payload: {
      index: number,
      size: Size,
      error: string
    };
  }

  export class LoadColorOrderList implements Action {
    readonly type = ComboOrderMatrixActionTypes.LoadColorOrderList;  
    constructor(readonly payload: {colorOrderList: ColorOrder[]}) {  
    }
  }

  export class AddColorOrder implements Action {
    readonly type = ComboOrderMatrixActionTypes.AddColorOrder;  
    constructor(readonly payload: {index: number}) {
    }
  }

  export class RemoveColorOrder implements Action {
    readonly type = ComboOrderMatrixActionTypes.RemoveColorOrder;  
    constructor(readonly payload: {index: number}) {
    }
  }

  export class UpdateColorOrder implements Action {
    readonly type = ComboOrderMatrixActionTypes.UpdateColorOrder;  
    constructor(readonly payload: {index: number, colorOrder: ColorOrder}) {
    }
  }

  export class MoveColorOrderUp implements Action {
    readonly type = ComboOrderMatrixActionTypes.MoveColorOrderUp;  
    constructor(readonly payload: {index: number}) {
    }
  }

  export class MoveColorOrderDown implements Action {
    readonly type = ComboOrderMatrixActionTypes.MoveColorOrderDown;  
    constructor(readonly payload: {index: number}) {
    }
  }

  export class LoadComboList implements Action {
    readonly type = ComboOrderMatrixActionTypes.LoadComboList;  
    constructor(readonly payload: {comboList: Combo[]}) {  
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
    constructor(readonly payload: {index: number, combo: Combo}) {
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
    
  export type ComboListActions = LoadComboList;

