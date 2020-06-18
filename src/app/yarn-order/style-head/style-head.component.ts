import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { StyleInfo } from '../../share/styleInfo';

@Component({
  selector: 'app-style-head',
  templateUrl: './style-head.component.html',
  styleUrls: ['./style-head.component.css']
})
export class StyleHeadComponent implements OnInit {
  @Input() styleInfo : StyleInfo;
  @Output() styleInfoUpdate = new EventEmitter<StyleInfo>();

  constructor() { }

  ngOnInit(): void {
  }

  onStyleInfoChange(text : string)
  {
    this.styleInfo.factoryStyleNumber = text;
    this.styleInfoUpdate.emit(this.styleInfo);
  }
}
