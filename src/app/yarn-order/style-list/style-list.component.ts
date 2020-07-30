import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { StyleInfo } from '../../models/styleInfo';
import { select, Store } from '@ngrx/store'; 
import { Observable } from 'rxjs';
import { RemoveStyleItem, AddStyleItem, UpdateStyleItem } from 'src/app/actions/style-list-action-types'
import { PreloadMatCal } from 'src/app/actions/mat-cal-action-types'
import { EventAction } from 'src/app/models/eventAction';

@Component({
  selector: 'app-style-list',
  templateUrl: './style-list.component.html',
  styleUrls: ['./style-list.component.css']
})
export class StyleListComponent implements OnInit {
  @Output() styleSelected = new EventEmitter<number>();
  styleItems$ : Observable<StyleInfo[]>;
  matCalType$ : Observable<number>;
  styleIndex : number;
  style : StyleInfo;

  constructor(private store: Store<{ styleItems: StyleInfo[], matCalType: number }>) {
    this.styleItems$ = store.pipe(select('styleItems')); 
    this.matCalType$ = store.pipe(select('matCalType'));
    if(this.styleItems$ != undefined && this.styleIndex != undefined)
    {
      this.styleItems$.subscribe(styleItems =>
        this.style = styleItems[this.styleIndex]
      );
    }    
   }

  ngOnInit(): void {
  }

  onStyleAction(event: EventAction)
  {
    //Edit/Delete action emit from the child component
    switch (event.action)
    {
      case "remove":
        console.log("Remove style item @" + event.index);
        this.store.dispatch(new RemoveStyleItem({index: event.index}));
        break;
      case "edit":
        //this.styleSelected.emit(event.index);
        this.styleIndex = event.index;
        this.styleItems$.subscribe(styleItems =>
          this.style = styleItems[this.styleIndex]
        )
        console.log("Clicked edit on a item of the style list:");
        console.log(this.style);
        console.log("Calculation type id: " + this.style.calculationTypeId);
        this.store.dispatch(new PreloadMatCal({typeID: this.style.calculationTypeId}));
        break;
    }
  }

  onAddStyle(index: number)
  {
    //Add style on UI
    this.store.dispatch(new AddStyleItem({index: index}));
  }  

  onStyleUpdate(styleInfo: {'factoryNumber' : string, 'matCalType' : number})
  {
    this.store.dispatch(new UpdateStyleItem({
      index: this.styleIndex, 
      style: new StyleInfo(
        styleInfo.factoryNumber, 
        styleInfo.matCalType)
      })
    );
  }
}
