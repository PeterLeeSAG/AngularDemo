import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-order-head',
  templateUrl: './order-head.component.html',
  styleUrls: ['./order-head.component.css']
})
export class OrderHeadComponent implements OnInit {
  order = null;
  constructor() { }

  ngOnInit(): void {
  }

  onClickOrderAdd() {

  }

  onClickOrderRemove() {

  }

}
