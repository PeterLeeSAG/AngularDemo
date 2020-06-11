import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Combo } from '../combo';

@Component({
  selector: 'app-combo-table',
  templateUrl: './combo-table.component.html',
  styleUrls: ['./combo-table.component.css']
})
export class ComboTableComponent implements OnInit {
  @Input() combo: Combo;   //combo view model
  
  constructor() { }

  ngOnInit(): void {
  }

}
