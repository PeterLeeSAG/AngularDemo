import { Component, OnInit } from '@angular/core';
import { MaterialYarn } from 'src/app/models/materialYarn';
import { select, Store } from '@ngrx/store'; 
import { Observable } from 'rxjs';
import { LoadMatYarnList, AddMatYarn, RemoveMatYarn } from 'src/app/actions/mat-yarn-list-action-types'

@Component({
  selector: 'app-material-list',
  templateUrl: './material-yarn-list.component.html',
  styleUrls: ['./material-yarn-list.component.css']
})
export class MaterialListComponent implements OnInit {
  materialYarns : Observable<MaterialYarn[]>;

  constructor(private store: Store<{ materialYarns: MaterialYarn[] }>) { 
    this.materialYarns = store.pipe(select('materialYarns')); 
  }

  ngOnInit(): void {
  }

  matYarnUpdated(matYarnAction: {"posID":number, "action":string})
  {
    switch (matYarnAction.action)
    {
      case "add":
        this.matYarnAdded(matYarnAction.posID);
        break;
      case "remove":
        this.matYarnRemoved(matYarnAction.posID);
        break;
      default:
        console.log("Action: " + matYarnAction.action + " is not exist.");
        break;
    }
  }

  matYarnRemoved(listID: number)
  {
    //remove a item at the position id
    this.store.dispatch(new RemoveMatYarn({index: listID}));
  }

  matYarnAdded(listID: number)
  {
    //insert a item at the position id
    this.store.dispatch(new AddMatYarn({index: listID}));
  }

  onPushMateralYarn()
  {
    this.store.dispatch(new AddMatYarn({index: 0}));
  }
}
