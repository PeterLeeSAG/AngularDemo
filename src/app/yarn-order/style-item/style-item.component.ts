import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { StyleInfo } from '../../models/styleInfo';
import { EventAction } from 'src/app/models/eventAction';

@Component({
  selector: 'app-style-item',
  templateUrl: './style-item.component.html',
  styleUrls: ['./style-item.component.css']
})
export class StyleItemComponent implements OnInit {
  styleName : string;
  @Input() index : number;
  @Input() style: StyleInfo;
  @Output() styleAtion = new EventEmitter<EventAction>();
  matCalItems : {'typeID':number, 'typeText':string}[];
  event: EventAction;

  constructor() { 
    //TODO: load the list from service class via webapi
    this.matCalItems = []; 
    this.matCalItems.push({'typeID':0,'typeText':"不分色組/碼數計毛"});
    this.matCalItems.push({'typeID':1,'typeText':"分色組用毛比例計毛"});
    this.matCalItems.push({'typeID':2,'typeText':"分碼數計毛"});
    this.matCalItems.push({'typeID':3,'typeText':"分色組用毛比例/碼數計毛"}); 
  }

  ngOnInit(): void {
    this.event = new EventAction();
    this.event.index = this.index;
  }

  ngOnChanges(changes) {
    if (this.style != null)
    {
      this.styleName = this.matCalItems.find(i => i.typeID == this.style.calculationTypeId).typeText;
    }   
  }

  showIndex() : number
  {
    return this.index + 1;
  }

  onEditStyle()
  {
    //Select Style on UI
    this.event.action = "edit"
    this.event.index = this.index;
    this.styleAtion.emit(this.event);
  }

  onRemoveStyle()
  {
    //Remove style on UI
    this.event.action = "remove"
    this.event.index = this.index;
    this.styleAtion.emit(this.event);
  }  
}
