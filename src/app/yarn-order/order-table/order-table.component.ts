import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ColorOrder } from '../../models/colorOrder';
import { MatCalType } from 'src/app/models/matCalType';
import { select, Store } from '@ngrx/store'; 
import { Observable } from 'rxjs';

@Component({
  selector: 'app-order-table',
  templateUrl: './order-table.component.html',
  styleUrls: ['./order-table.component.css']
})
export class OrderTableComponent implements OnInit {
  @Input() order : ColorOrder;
  @Input() nextRefID : number;
  @Output() changeFtyMixedMat = new EventEmitter<number>();
  @Output() addFtyMixedMat = new EventEmitter<number>();

  matCalType : Observable<MatCalType>;

  constructor(private store: Store<{ matCalType: MatCalType }>) { 
    this.matCalType = store.pipe(select('matCalType'));
  }

  ngOnInit(): void {
  }

  toggleMixedMat(id: number)
  {
    console.log("Change factory mixed mat @ the order " + id);
    this.changeFtyMixedMat.emit(id);
  }

  addMixedMat(id: number)
  {
    console.log("Add factory mixed mat @ the order " + id);
    this.addFtyMixedMat.emit(id);
  }

  getMixMatStatus()
  {
    if (this.order.isFtyMixed)
    {
      if (this.order.refID == null)
      {
        if (this.nextRefID == this.order.id)
        {
          //need to hide the '變回普通間色' button
          return 3;
        }
        return 1; //head
      }
      else
      {
        return 2; //sub mixed mat
      }
    }
    else
    {
      return 0; //not mixed mat
    }
  }
}
