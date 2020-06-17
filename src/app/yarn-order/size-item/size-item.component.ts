import { Component, OnInit, EventEmitter, Input, Output } from '@angular/core';
import { Size } from '../../share/size';

@Component({
  selector: 'app-size-item',
  templateUrl: './size-item.component.html',
  styleUrls: ['./size-item.component.css']
})
export class SizeItemComponent implements OnInit {
  sizes: Size[]; //Load the size array from the size service
  @Input() itemSize: {"id":number, "sizeID":number};
  @Output() result = new EventEmitter<{"posID":number, "action":string}>(); //Send posID, sizeID and action

  constructor() { }

  ngOnInit(): void {
  }

  onAddSize(id: number)
  {
    this.result.emit({"posID":id, "action":"add"})
  }

  onRemoveSize(id:number)
  {
    this.result.emit({"posID": id, "action":"remove"})
  }
}
