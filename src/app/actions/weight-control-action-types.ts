import { Action } from '@ngrx/store';

export enum WeightControlActionTypes {
    Load = '[Weight List] LOAD',
    UpdateWeightItem = '[Weight List] UPDATE ITEM',
    UpdateWeightMatCal = '[Weight List] UPDATE MAT CAL',
    UpdateWeightSize = '[Weight List] UPDATE SIZE'
}

export class WeightControlAction implements Action {
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
    readonly type = WeightControlActionTypes.Load;  
    constructor(readonly payload: {
      comboIndex: number,
      orderIndex: number}) {  
    }
  }

  export class UpdateWeightItem implements Action {
    readonly type = WeightControlActionTypes.UpdateWeightItem;  
    constructor(readonly payload: {
      comboIndex: number,
      orderIndex: number,
      sizeId: number,
      weight: number,
      wastagePercent: number}) {  
    }
  }

  export class UpdateWeightMatCal implements Action {
    readonly type = WeightControlActionTypes.UpdateWeightMatCal;  
    constructor(readonly payload: {matCalTypeId: number}) {
    }
  }

  export class UpdateWeightSize implements Action {
    readonly type = WeightControlActionTypes.UpdateWeightSize;  
    constructor(readonly payload: {
      comboIndex: number,
      orderIndex: number,
      sizeId: number,
      weight: number,
      wastagePercent: number}) {
    }
  }