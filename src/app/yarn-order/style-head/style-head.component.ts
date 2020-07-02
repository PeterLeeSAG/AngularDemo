import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { StyleInfo } from '../../models/styleInfo';
import { MatCalType } from 'src/app/models/matCalType';
import { select, Store } from '@ngrx/store'; 
import { Observable } from 'rxjs';
import { LoadMatCal, UpdateMatCal } from 'src/app/actions/mat-cal-action-types'

@Component({
  selector: 'app-style-head',
  templateUrl: './style-head.component.html',
  styleUrls: ['./style-head.component.css']
})
export class StyleHeadComponent implements OnInit {
  @Input() styleInfo : StyleInfo;
  @Output() styleInfoUpdate = new EventEmitter<StyleInfo>();
  matCalItems : {'typeID':number, 'typeText':string}[];
  matCalType : Observable<MatCalType>;

  constructor(private store: Store<{ matCalType: MatCalType }>) { 
    this.matCalItems = []; 
    this.matCalType = store.pipe(select('matCalType'));
    this.matCalItems.push({'typeID':0,'typeText':"不分色組/碼數計毛"});
    this.matCalItems.push({'typeID':1,'typeText':"分色組用毛比例計毛"});
    this.matCalItems.push({'typeID':2,'typeText':"分碼數計毛"});
    this.matCalItems.push({'typeID':3,'typeText':"分色組用毛比例/碼數計毛"});
  }

  ngOnInit(): void {
  }

  onStyleInfoChange(text : string)
  {
    this.styleInfo.factoryStyleNumber = text;
    this.styleInfoUpdate.emit(this.styleInfo);
  }

  onMaterialCalUpdate(mTypeID: number)
  {
    this.store.dispatch(new UpdateMatCal({typeID: mTypeID}));
    console.log("selected material calculation type id: " + mTypeID);
  }
}
