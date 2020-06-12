import { Component, OnInit } from '@angular/core';
import { Combo } from "./combo";
import { Order } from "./order";

@Component({
  selector: 'app-yarn-order',
  templateUrl: './yarn-order.component.html',
  styleUrls: ['./yarn-order.component.css']
})
export class YarnOrderComponent implements OnInit {
info = ['1','2','3','4'];

combos = [
    {"id":1,"code":"A","chineseName":"紅色","englishName":"Red"},
    {"id":2,"code":"B","chineseName":"綠色","englishName":"Green"},
    {"id":3,"code":"C","chineseName":"白色","englishName":"White"},
    {"id":4,"code":"D","chineseName":"黑色","englishName":"Black"}
];

orders = [
    {"id":1,"code":"1","name":"身衫1色","matType":0,"isFtyMixed":false},
    {"id":2,"code":"2","name":"身衫2色","matType":0,"isFtyMixed":false},
    {"id":3,"code":"3","name":"身衫3色","matType":0,"isFtyMixed":false},
    {"id":4,"code":"4","name":"身衫4色","matType":0,"isFtyMixed":false}
];

  constructor() { }

  ngOnInit(): void {
  }

  onAddCombo(comboID: number)
  {
    this.combos.splice(comboID, 0, {"id":comboID,"code":"NEW","chineseName":"","englishName":""});
  }

  onRemoveCombo(comboID: number)
  {
    this.combos.splice(comboID-1, 1);
  }

  onComboUpdate(combo: Combo)
  {
    console.log(combo.id);
  }

  onAddOrder(orderID: number)
  {
    this.orders.splice(orderID, 0, {"id":orderID,"code":"A","name":"NEW","matType":0,"isFtyMixed":false});
  }

  onRemoveOrder(orderID: number)
  {
    this.orders.splice(orderID-1, 1);
  }

  onOrderUpdate(order: Order)
  {
    console.log(order.id);
  }

  onToggleMixedMat(orderID: number)
  {
    this.orders[orderID-1].isFtyMixed = !(this.orders[orderID-1].isFtyMixed);
    console.log("toggle mix mat type in yarn order parent @ order #" + orderID);
  }
}
