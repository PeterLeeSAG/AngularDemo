import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-combo-head',
  templateUrl: './combo-head.component.html',
  styleUrls: ['./combo-head.component.css']
})
export class ComboHeadComponent implements OnInit {
  comboID = 0;
  comboAction = "";
  combo = null;

  @Output() comboEvent = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
  }

  callParent(): void {
    this.comboEvent.next(this.comboAction);
  }

  onClickComboAdd()
  {
    this.comboAction = "Add";
  }

  onClickComboRemove()
  {
    this.comboAction = "Remove";
  }
}
