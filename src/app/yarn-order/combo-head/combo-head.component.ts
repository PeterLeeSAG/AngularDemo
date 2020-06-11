import { Component, EventEmitter, OnInit, Input, Output } from '@angular/core';
import { Combo } from "../combo";

@Component({
  selector: 'app-combo-head',
  template: `
  <!--Combo Header-->
  <button (click)="onClickComboAdd(combo.id)" mat-button>+</button>
  Combo {{ combo.code }}
  <button (click)="onClickComboRemove(combo.id)" mat-button>-</button>
  `, //'./combo-head.component.html',
  styleUrls: ['./combo-head.component.css']
})
export class ComboHeadComponent implements OnInit {
  @Input() combo: Combo;   //combo view model
  @Output() addCombo = new EventEmitter<number>();
  @Output() removeCombo = new EventEmitter<number>();
  
  comboAction = "";

  constructor() { }

  ngOnInit(): void {
  }

  callParent(): void {
    if (this.comboAction == "Add")
    {
      this.addCombo.emit(this.combo.id);  
    }
    else if(this.comboAction == "Remove")
    {
      this.removeCombo.emit(this.combo.id);
    }    
  }

  onClickComboAdd(id: number)
  {
    this.comboAction = "Add";
    console.log("click the add combo id: " + id);
    this.callParent();
  }

  onClickComboRemove(id: number)
  {
    this.comboAction = "Remove";
    console.log("click the remove combo id: " + id);
    this.callParent();
  }
}
