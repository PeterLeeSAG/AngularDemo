import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-yarn-order',
  templateUrl: './yarn-order.component.html',
  styleUrls: ['./yarn-order.component.css']
})
export class YarnOrderComponent implements OnInit {
  combos = [
    {"id":1,"code":"A","description":"Incidunt et magni","price":"170.00","quantity":56840},
    {"id":2,"code":"B","description":"Sint libero mollitia","price":"302.00","quantity":9358},
    {"id":3,"code":"C","description":"In consequuntur cupiditat","price":"279.00","quantity":90316},
    {"id":4,"code":"D","description":"Saepe nemo praesentium","price":"760.00","quantity":5899}
];;

orders = [
  {"id":1,"name":"Licensed Frozen Hat","description":"Incidunt et magni","price":"170.00","quantity":56840},
  {"id":2,"name":"Rustic Concrete Chicken","description":"Sint libero mollitia","price":"302.00","quantity":9358},
  {"id":3,"name":"Fantastic Metal Computer","description":"In consequuntur cupiditat","price":"279.00","quantity":90316},
  {"id":4,"name":"Refined Concrete Chair","description":"Saepe nemo praesentium","price":"760.00","quantity":5899}
];;

  constructor() { }

  ngOnInit(): void {
  }

}
