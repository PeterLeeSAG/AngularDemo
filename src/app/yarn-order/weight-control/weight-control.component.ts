import { Component, OnInit, Input } from '@angular/core';
import { MatCalType } from 'src/app/models/matCalType';
import { SizeItem } from 'src/app/models/size';
import { select, Store } from '@ngrx/store'; 
import { Observable } from 'rxjs';

@Component({
  selector: 'app-weight-control',
  templateUrl: './weight-control.component.html',
  styleUrls: ['./weight-control.component.css']
})
export class WeightControlComponent implements OnInit {
  @Input() orderIndexId : number;
  @Input() comboIndexId : number;
  MatCalType = MatCalType; //Type reference
  matCalType : Observable<MatCalType>;
  sizeItems : Observable<SizeItem[]>;

  constructor(private store: Store<{ matCalType: MatCalType, sizeItems: SizeItem[] }>) { 
    this.matCalType = store.pipe(select('matCalType'));
    this.sizeItems = store.pipe(select('sizeItems'));
  }

  ngOnInit(): void {
  }

}
