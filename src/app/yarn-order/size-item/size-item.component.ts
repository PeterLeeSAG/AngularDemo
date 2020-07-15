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
  @Input() itemSize: {"listID":number, "size" : Size};
  @Output() result = new EventEmitter<{"posID":number, "action":string}>(); //Send posID, sizeID and action
  @Output() sizeSelected = new EventEmitter<{'listID':number, 'size': Size}>();
  @ViewChild('sizeSelection') sizeSelection : ElementRef;
  public selectedSize: Size;

  constructor() { }

  ngOnInit(): void {
    this.initSize();
  }

  initSize(){
    this.sizes = [{"id":0,"name":""}];
    //TODO: select sizes by SizeService via WebApi
    this.sizes.push(new Size(1,"XXS"));
    this.sizes.push(new Size(2,"XS"));
    this.sizes.push(new Size(3,"S"));
    this.sizes.push(new Size(4,"M"));
    this.sizes.push(new Size(5,"L"));
    this.sizes.push(new Size(6,"XL"));
    this.sizes.push(new Size(7,"XXL"));
    
    if (this.itemSize.size !== null)
    {
      this.selectedSize = this.itemSize.size;
      console.log(this.itemSize.size);
      console.log("init item size: " + this.itemSize.size.name);
    }
  }

  onSelectSize(sizeID:number)
  {
    var selectedSize : Size = this.sizes.find(s=>s.id==sizeID);
    if (selectedSize !== undefined)
    {
      console.log("selected size id " + sizeID + "@" + this.index);
      this.sizeSelected.emit({
        "listID": this.index,
        "size": selectedSize
      });  
    }
    else
    {
      console.log(event);
      console.log("cannot read the selected size object");
    }
  }

  onAddSize(id: number)
  {
    this.result.emit({"posID":this.index, "action":"add"})
  }

  onRemoveSize(id: number)
  {
    this.result.emit({"posID":this.index, "action":"remove"})
  }

  onMoveSizeUp(id: number)
  {
    console.log("click up @ " + this.index);
    this.result.emit({"posID":this.index, "action":"up"})
  }

  onMoveSizeDown(id: number)
  {
    console.log("click down @ " + this.index);
    this.result.emit({"posID":this.index, "action":"down"})
  }
}
