import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-style-head',
  templateUrl: './style-head.component.html',
  styleUrls: ['./style-head.component.css']
})
export class StyleHeadComponent implements OnInit {
  styleInfo : {"factoryStyleNo":string, "calculationTypeId":number };
  constructor() { }

  ngOnInit(): void {
  }

}
