import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Order } from '../../models/order';

@Component({
  selector: 'app-order-head',
  templateUrl: './order-head.component.html',
  styleUrls: ['./order-head.component.css']
})
export class OrderHeadComponent implements OnInit {
  @Input() order : Order;
  @Input() currIndex: number;
  @Input() maxIndex: number;
  @Output() addOrder = new EventEmitter<number>();
  @Output() removeOrder = new EventEmitter<number>();
  @Output() moveOrderUp = new EventEmitter<number>();
  @Output() moveOrderDown = new EventEmitter<number>();

  orderAction = "";
  hideMoveUp = false;
  hideMoveDown = false;

  constructor() { }

  ngOnInit(): void {
    this.onUpdateArrow();
  }

  onUpdateArrow()
  {
    if (this.currIndex == 0)
    {
      this.hideMoveUp = true;
    }

    if (this.currIndex == this.maxIndex)
    {
      this.hideMoveDown = true;
    }
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
    else if(this.orderAction == "Up")
    {
      this.moveOrderUp.emit(this.order.id);
    }
    else if(this.orderAction == "Down")
    {
      this.moveOrderDown.emit(this.order.id);
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

  onClickOrderMoveUp()
  {
    this.orderAction = "Up";
    console.log("click move up order id: " + this.order.id);
    this.callParent();
  }

  onClickOrderMoveDown()
  {
    this.orderAction = "Down";
    console.log("click move downp order id: " + this.order.id);
    this.callParent();
  }
}
