import { Component, OnInit } from '@angular/core';
import { Combo } from "./combo";

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
  {"id":1,"name":"身衫1色","description":"Incidunt et magni","price":"170.00","quantity":56840},
  {"id":2,"name":"身衫2色","description":"Sint libero mollitia","price":"302.00","quantity":9358},
  {"id":3,"name":"身衫3色","description":"In consequuntur cupiditat","price":"279.00","quantity":90316},
  {"id":4,"name":"身衫4色","description":"Saepe nemo praesentium","price":"760.00","quantity":5899}
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
}
