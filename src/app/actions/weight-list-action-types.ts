import { Action } from '@ngrx/store';

export enum WeightListActionTypes {
    Load = '[Weight List] LOAD',
    UpdateWeightItem = '[Weight List] UPDATE ITEM',
    UpdateWeightMatCal = '[Weight List] UPDATE MAT CAL',
    UpdateWeightSize = '[Weight List] UPDATE SIZE'
}

export class WeightListAction implements Action {
    type: string;
    payload: {
      comboIndex: number,
      orderIndex: number,
      sizeId: number,
      matCalTypeId: number,
      weight: number,
      wastagePercent: number,
      error: string
    };
  }

  export class Load implements Action {
    readonly type = WeightListActionTypes.Load;  
    constructor(readonly payload: {
      comboIndex: number,
      orderIndex: number}) {  
    }
  }

  export class UpdateWeightItem implements Action {
    readonly type = WeightListActionTypes.UpdateWeightItem;  
    constructor(readonly payload: {
      comboIndex: number,
      orderIndex: number,
      sizeId: number,
      weight: number,
      wastagePercent: number}) {  
    }
  }

  export class UpdateWeightMatCal implements Action {
    readonly type = WeightListActionTypes.UpdateWeightMatCal;  
    constructor(readonly payload: {matCalTypeId: number}) {
    }
  }

  export class UpdateWeightSize implements Action {
    readonly type = WeightListActionTypes.UpdateWeightSize;  
    constructor(readonly payload: {
      comboIndex: number,
      orderIndex: number,
      sizeId: number,
      weight: number,
      wastagePercent: number}) {
    }
  }