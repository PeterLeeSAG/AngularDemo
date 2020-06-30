import { Component, OnInit, EventEmitter, Input, Output, ViewChild, ElementRef } from '@angular/core';
import { Size } from '../../models/size';

@Component({
  selector: 'app-size-item',
  templateUrl: './size-item.component.html',
  styleUrls: ['./size-item.component.css']
})
export class SizeItemComponent implements OnInit {
  sizes: Size[]; 
  @Input() index: number;
  @Input() itemSize: {"listID":number, "sizeID":number};
  @Output() result = new EventEmitter<{"posID":number, "action":string}>(); //Send posID, sizeID and action
  @Output() sizeSelected = new EventEmitter<{'listID':number, 'sizeID': number}>();
  @ViewChild('sizeSelection') sizeSelection : ElementRef;

  constructor() { }

  ngOnInit(): void {
    this.initSize();
  }

  initSize(){
    this.sizes = [{"id":0,"name":""}];
    //Load the size array from the size service
    this.sizes.push(new Size(1,"XXS"));
    this.sizes.push(new Size(2,"XS"));
    this.sizes.push(new Size(3,"S"));
    this.sizes.push(new Size(4,"M"));
    this.sizes.push(new Size(5,"L"));
    this.sizes.push(new Size(6,"XL"));
    this.sizes.push(new Size(7,"XXL"));
  }

  onSelectSize(sizeID: number)
  {
    this.sizeSelected.emit({
      "listID": this.index,
      "sizeID": this.sizeSelection.nativeElement.value
    });
  }

  onAddSize(id: number)
  {
    this.result.emit({"posID":this.index, "action":"add"})
  }

  onRemoveSize(id: number)
  {
    this.result.emit({"posID":this.index, "action":"remove"})
  }
}
