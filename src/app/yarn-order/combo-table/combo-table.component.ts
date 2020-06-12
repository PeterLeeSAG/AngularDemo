import { Component, EventEmitter, OnInit, Input, Output } from '@angular/core';
import { Combo } from "../combo";


@Component({
  selector: 'app-combo-table',
  templateUrl: './combo-table.component.html',
  styleUrls: ['./combo-table.component.css']
})
export class ComboTableComponent implements OnInit {
  @Input() combo: Combo;   //combo view model
  @Output() comboUpdate = new EventEmitter<Combo>();

  constructor() { }

  ngOnInit(): void {
  }

  onComboUpdate()
  {
    this.comboUpdate.emit(this.combo);
  }
}
