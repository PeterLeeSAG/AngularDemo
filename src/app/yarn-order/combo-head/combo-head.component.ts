import { Component, EventEmitter, OnInit, Input, Output } from '@angular/core';
import { Combo } from "../../share/combo";

@Component({
  selector: 'app-combo-head',
  template: `
  <!--Combo Header-->
  <button (click)="onClickComboAdd(combo.id)" mat-button>+</button>
  <button (click)="onClickComboMoveLeft()" mat-button>[<]</button>
  Combo: {{ combo.code }}
  <button (click)="onClickComboMoveRight()" mat-button>[>]</button>
  <button (click)="onClickComboRemove(combo.id)" mat-button>-</button>
  `, //'./combo-head.component.html',
  styleUrls: ['./combo-head.component.css']
})
export class ComboHeadComponent implements OnInit {
  @Input() combo: Combo;   //combo view model
  @Input() currIndex: number;
  @Input() maxIndex: number;
  @Output() addCombo = new EventEmitter<number>();
  @Output() removeCombo = new EventEmitter<number>();
  @Output() moveComboLeft = new EventEmitter<number>();
  @Output() moveComboRight = new EventEmitter<number>();
  
  comboAction = "";
  hideMoveLeft = false;
  hideMoveRight = false;

  constructor() { }

  ngOnInit(): void {
    this.onUpdateArrow();
  }

  onUpdateArrow() {
    if (this.currIndex == 0)
    {
      this.hideMoveLeft = true;
    }

    if (this.currIndex == this.maxIndex)
    {
      this.hideMoveRight = true;
    }
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
    else if(this.comboAction == "Left")
    {
      this.moveComboLeft.emit(this.combo.id);
    }
    else if(this.comboAction == "Right")
    {
      this.moveComboRight.emit(this.combo.id);
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

  onClickComboMoveLeft()
  {
    this.comboAction = "Left";
    console.log("click move left combo id: " + this.combo.id);
    this.callParent();
  }

  onClickComboMoveRight()
  {
    this.comboAction = "Right";
    console.log("click move left combo id: " + this.combo.id);
    this.callParent();
  }
}
