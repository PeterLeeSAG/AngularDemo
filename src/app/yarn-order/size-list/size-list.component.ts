import { Component, OnInit } from '@angular/core';
import { Size, SizeItem } from 'src/app/models/size';
import { select, Store } from '@ngrx/store'; 
import { Observable } from 'rxjs';
import { LoadSizeList, AddSizeItem, RemoveSizeItem, UpdateSizeItem, MoveSizeItemUp, MoveSizeItemDown } from 'src/app/actions/size-list-action-types'

@Component({
  selector: 'app-size-list',
  templateUrl: './size-list.component.html',
  styleUrls: ['./size-list.component.css']
})
export class SizeListComponent implements OnInit {
  sizeItems : Observable<SizeItem[]>;

  constructor(private store: Store<{ sizeItems: SizeItem[] }>) { 
    this.sizeItems = store.pipe(select('sizeItems')); 
  }

  ngOnInit(): void {
  }

  sizeSelected(sizeInfo: {'listID':number, 'size': Size})
  {
    this.store.dispatch(new UpdateSizeItem({index: sizeInfo.listID, size: sizeInfo.size}))
    console.log("selected size id " + sizeInfo.size.id + "(" + sizeInfo.size.name + ")" + " @ " + sizeInfo.listID)
  }

  sizeUpdated(sizeAction: {"posID":number, "action":string})
  {
    switch (sizeAction.action)
    {
      case "add":
        this.sizeAdded(sizeAction.posID);
        break;
      case "remove":
        this.sizeRemoved(sizeAction.posID);
        break;
      case "up":
        this.sizeMoveUp(sizeAction.posID);
        break;
      case "down":
        this.sizeMoveDown(sizeAction.posID);
        break;
    }
  }

  sizeRemoved(listID: number)
  {
    //remove a item at the position id
    this.store.dispatch(new RemoveSizeItem({index: listID}));
  }

  sizeAdded(listID: number)
  {
    //insert a item at the position id
    this.store.dispatch(new AddSizeItem({index: listID}));
  }

  sizeMoveUp(listID: number)
  {
    this.store.dispatch(new MoveSizeItemUp({index: listID}));
  }

  sizeMoveDown(listID: number)
  {
    this.store.dispatch(new MoveSizeItemDown({index: listID}));
  }
}
