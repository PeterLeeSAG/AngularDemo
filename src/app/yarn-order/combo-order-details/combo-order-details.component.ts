import { Component, OnInit, Input } from '@angular/core';
import { ComboOrderDetail } from '../../models/comboOrderDetail';
import { MatCalType } from 'src/app/models/matCalType';
import { MaterialYarn } from 'src/app/models/materialYarn';
import { select, Store } from '@ngrx/store'; 
import { Observable } from 'rxjs';
import { map, materialize } from 'rxjs/operators';
import { LoadMatYarnList } from 'src/app/actions/mat-yarn-list-action-types';

@Component({
  selector: 'app-combo-order-details',
  templateUrl: './combo-order-details.component.html',
  styleUrls: ['./combo-order-details.component.css']
})
export class ComboOrderDetailsComponent implements OnInit {
  @Input() comboOrderDetail : ComboOrderDetail;
  
  selectedMaterialID : number;
  selectedMaterialName : String = "";
  pendingButtonName : string;
  //"待覆":"實數"
  matCalType$ : Observable<MatCalType>;
  materialYarns$ : Observable<MaterialYarn[]>;
  
  constructor(private store: Store<{ matCalType: MatCalType, materialYarns:MaterialYarn[] }>) { 
    this.matCalType$ = store.pipe(select('matCalType'));
    this.materialYarns$ = store.pipe(select('materialYarns'));
  }

  ngOnInit(): void {
    if (this.comboOrderDetail.colorNo.trim() == "待覆")
    {
      this.pendingButtonName = "實數";
    }
    else
    {
      this.pendingButtonName = "待覆";
    }
  }

  setSelectedMaterial(event)
  {
    console.log("material ID selected...");    
    console.log(event.source.value);
    console.log(event);
    this.selectedMaterialName = event.source.selected.viewValue;
  }

  onToggleColorNo()
  {
    if (this.pendingButtonName == "待覆")
    {
      this.comboOrderDetail.colorNo = "待覆";
      this.pendingButtonName = "實數";
    }
    else
    {
      this.comboOrderDetail.colorNo = "";
      this.pendingButtonName = "待覆";
    }
  }
}
