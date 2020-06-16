import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Order } from '../order';

@Component({
  selector: 'app-order-table',
  templateUrl: './order-table.component.html',
  styleUrls: ['./order-table.component.css']
})
export class OrderTableComponent implements OnInit {
  @Input() order : Order;
  @Output() changeFtyMixedMat = new EventEmitter<number>();
  @Output() addFtyMixedMat = new EventEmitter<number>();

  constructor() { }

  ngOnInit(): void {
  }

  toggleMixedMat(id: number)
  {
    console.log("Change factory mixed mat @ the order " + id);
    this.changeFtyMixedMat.emit(id);
  }

  addMixedMat(id: number)
  {
    console.log("Add factory mixed mat @ the order " + id);
    this.addFtyMixedMat.emit(id);
  }

  getMixMatStatus()
  {
    if (this.order.isFtyMixed)
    {
      if (this.order.refID == null)
      {
        return 1; //head
      }
      else
      {
        return 2; //sub mixed mat
      }
    }
    else
    {
      return 0; //not mixed mat
    }
  }
}
