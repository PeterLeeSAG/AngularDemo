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

  sizeSelected(sizeInfo: {'listID':number, 'sizeID': number})
  {
    this.store.dispatch(new UpdateSizeItem({index: sizeInfo.listID, sizeID: sizeInfo.sizeID}))
    console.log("selected size id " + sizeInfo.sizeID + " @ " + sizeInfo.listID)
  }

  sizeUpdated(sizeAction: {"posID":number, "action":string})
  {
    if (sizeAction.action == "add")
    {
      this.sizeAdded(sizeAction.posID);
    }
    else if (sizeAction.action == "remove")
    {
      this.sizeRemoved(sizeAction.posID);
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
}
