import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { StyleInfo } from '../../models/styleInfo';
import { MatCalType } from 'src/app/models/matCalType';
import { select, Store } from '@ngrx/store'; 
import { Observable } from 'rxjs';
import { PreloadMatCal, UpdateMatCal } from 'src/app/actions/mat-cal-action-types'
import { ReducerHelper } from 'src/app/share/reducer-helper'

@Component({
  selector: 'app-style-head',
  templateUrl: './style-head.component.html',
  styleUrls: ['./style-head.component.css']
})
export class StyleHeadComponent implements OnInit {
  @Input() style : StyleInfo;
  @Input() index : number;
  @Output() updatedStyle = new EventEmitter<{'factoryNumber': string,  'matCalType': number}>();
  reducerHelper : ReducerHelper = new ReducerHelper();
  myStyle : StyleInfo;
  matCalItems : {'typeID':number, 'typeText':string}[];
  matCalType$ : Observable<MatCalType>;

  constructor(private store: Store<{ matCalType: MatCalType }>) { 
    console.log("constructor style head...")
    console.log(this.style);
    this.myStyle = this.reducerHelper.bestCopyEver(this.style); //store style value instead of refenence
    this.matCalItems = []; 
    this.matCalType$ = store.pipe(select('matCalType'));
    this.matCalItems.push({'typeID':0,'typeText':"不分色組/碼數計毛"});
    this.matCalItems.push({'typeID':1,'typeText':"分色組用毛比例計毛"});
    this.matCalItems.push({'typeID':2,'typeText':"分碼數計毛"});
    this.matCalItems.push({'typeID':3,'typeText':"分色組用毛比例/碼數計毛"});
  }

  ngOnInit(): void {
    console.log("Initializing style head...")
    console.log(this.style);
    this.myStyle = this.reducerHelper.bestCopyEver(this.style); //store style value instead of refenence
  }

  onStyleInfoChange(text : string)
  {
    this.matCalType$.subscribe(matCalType =>
      this.myStyle.calculationTypeId = matCalType
      );
    this.myStyle.factoryStyleNumber = text;

    console.log("update style number: " + text);
    console.log(this.myStyle);

    this.updatedStyle.emit({
      'factoryNumber': text,  
      'matCalType': this.myStyle.calculationTypeId});
  }

  onMaterialCalUpdate(mTypeID: number)
  {
    this.myStyle.calculationTypeId = mTypeID;    
    this.store.dispatch(new UpdateMatCal({typeID: mTypeID}));

    console.log("selected style calculation type id: " + mTypeID);
    console.log(this.myStyle);

    this.updatedStyle.emit({
      'factoryNumber': this.style.factoryStyleNumber,  
      'matCalType': mTypeID});
  }  
}
