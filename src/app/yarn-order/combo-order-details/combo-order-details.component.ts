import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-combo-order-details',
  templateUrl: './combo-order-details.component.html',
  styleUrls: ['./combo-order-details.component.css']
})
export class ComboOrderDetailsComponent implements OnInit {
  orderCombo;
  materials = [];
  constructor() { }

  ngOnInit(): void {
  }

}
