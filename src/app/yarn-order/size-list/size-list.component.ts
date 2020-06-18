import { Component, OnInit } from '@angular/core';
import { Size } from 'src/app/share/size';

@Component({
  selector: 'app-size-list',
  templateUrl: './size-list.component.html',
  styleUrls: ['./size-list.component.css']
})
export class SizeListComponent implements OnInit {
sizes : Size[];
sizeItems : [{"listID": number, "sizeID": number}];

  constructor() { }

  ngOnInit(): void {
    this.sizeItems = [{"listID": 1, "sizeID": 0}];
  }

  sizeSelected(sizeInfo: {'listID':number, 'sizeID': number})
  {
    //this.sizeItems[sizeInfo.listID].sizeID = sizeInfo.sizeID;
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
    this.sizeItems.splice(listID, 1);
    this.reorderListID();
  }

  sizeAdded(listID: number)
  {
    //insert a item at the position id
    this.sizeItems.splice(listID, 0, {'listID':listID, 'sizeID':0});
    this.reorderListID();
  }

  reorderListID()
  {
    var listID = 1;
    for (let index = 0; index < this.sizeItems.length; index++) {
      const element = this.sizeItems[index];
      element.listID = listID;
      listID++;
    }
  }
}
