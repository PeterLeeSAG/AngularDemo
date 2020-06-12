import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Order } from '../order';

@Component({
  selector: 'app-order-head',
  templateUrl: './order-head.component.html',
  styleUrls: ['./order-head.component.css']
})
export class OrderHeadComponent implements OnInit {
  orderAction = "";
  @Input() order : Order;
  @Output() addOrder = new EventEmitter<number>();
  @Output() removeOrder = new EventEmitter<number>();

  constructor() { }

  ngOnInit(): void {
  }

  callParent(): void {
    if (this.orderAction == "Add")
    {
      this.addOrder.emit(this.order.id);  
    }
    else if(this.orderAction == "Remove")
    {
      this.removeOrder.emit(this.order.id);
    }    
  }

  onClickOrderAdd(id: number)
  {
    this.orderAction = "Add";
    console.log("click the add order id: " + id);
    this.callParent();
  }

  onClickOrderRemove(id: number) 
  {
    this.orderAction = "Remove";
    console.log("click the remove order id: " + id)
    this.callParent();
  }
}
