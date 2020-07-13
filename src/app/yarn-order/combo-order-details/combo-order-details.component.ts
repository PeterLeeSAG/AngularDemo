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
  @Input() materials;
  
  selectedMaterialID : number;
  selectedMaterialName : string;
  pendingButtonName : string;
  //"待覆":"實數"
  matCalType$ : Observable<MatCalType>;
  materialYarns$ : Observable<MaterialYarn[]>;

  constructor(private store: Store<{ matCalType: MatCalType, materialYarns:MaterialYarn[] }>) { 
    this.matCalType$ = store.pipe(select('matCalType'));
    this.materialYarns$ = store.pipe(select('materialYarns'));
  }

  ngOnInit(): void {
    //TODO: select materials by MaterialService via WebApi
    this.materials = [
      {"id":1,"name":"2/10 100% cotton"},
      {"id":2,"name":"2/10 90% cotton 10% Lycra"},
      {"id":3,"name":"2/10 80% cotton 20% Lycra"},
      {"id":4,"name":"2/10 70% cotton 30% Lycra"}
    ];
    this.selectedMaterialName = "";
    if (this.comboOrderDetail.colorNo.trim() == "待覆")
    {
      this.pendingButtonName = "實數";
    }
    else
    {
      this.pendingButtonName = "待覆";
    }
  }

  setSelectedMaterial(matID: number)
  {
    this.selectedMaterialName = this.materials.find(
      function(value){
        value.id === matID
      }
      )[0].name;
  }

  getSelectedMaterialName()
  {
    return this.selectedMaterialName;
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

  filterMaterialYarns()
  {
    return this.materialYarns$.pipe(
      map(materialYarns => {
        materialYarns.filter(
          material =>
            material.material != undefined
            && material.supplier != undefined
        )
      })
    )
  }
}
