import { Component, OnInit } from '@angular/core';
import { Size } from 'src/app/share/size';

@Component({
  selector: 'app-size-list',
  templateUrl: './size-list.component.html',
  styleUrls: ['./size-list.component.css']
})
export class SizeListComponent implements OnInit {
sizes : Size[];

  constructor() { }

  ngOnInit(): void {
  }

}
