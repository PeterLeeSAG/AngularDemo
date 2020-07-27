import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { StyleInfo } from '../../models/styleInfo';
import { EventAction } from 'src/app/models/eventAction';

@Component({
  selector: 'app-style-item',
  templateUrl: './style-item.component.html',
  styleUrls: ['./style-item.component.css']
})
export class StyleItemComponent implements OnInit {
  @Input() index : number;
  @Input() style: StyleInfo;
  @Output() styleAtion = new EventEmitter<EventAction>();
  event: EventAction;

  constructor() { }

  ngOnInit(): void {
    this.event = new EventAction();
    this.event.index = this.index;
  }

  showIndex() : number
  {
    return this.index + 1;
  }

  onEditStyle()
  {
    //Select Style on UI
    this.event.action = "edit"
    this.styleAtion.emit(this.event);
  }

  onRemoveStyle()
  {
    //Remove style on UI
    this.event.action = "remove"
    this.styleAtion.emit(this.event);
  }  
}
