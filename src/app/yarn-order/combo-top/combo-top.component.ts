import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Combo } from '../../share/combo';

@Component({
  selector: 'app-combo-top',
  templateUrl: './combo-top.component.html',
  styleUrls: ['./combo-top.component.css']
})
export class ComboTopComponent implements OnInit {
  @Input() combo: Combo;   //combo view model
  @Input('id') comboID: number;
  @Output() comboRemoved = new EventEmitter<number>(); 

  constructor() { }

  ngOnInit(): void {
  }

  onComboRemove()
  {
    this.comboRemoved.emit(this.comboID);
  }
}
