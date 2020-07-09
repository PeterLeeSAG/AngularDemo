import { Component, OnInit, EventEmitter, Input, Output  } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable, of } from 'rxjs';
import { startWith, map, switchMap, debounceTime, catchError } from 'rxjs/operators';
import { Material } from '../../models/material'; //data model of material
import { MaterialService } from '../../services/material.service';

@Component({
  selector: 'app-autocomplete-material-dropdown',
  templateUrl: './autocomplete-material-dropdown.component.html',
  styleUrls: ['./autocomplete-material-dropdown.component.css']
})
export class AutocompleteMaterialDropdownComponent implements OnInit {
  control = new FormControl();
  @Input() material: Material;
  @Output() materialSelected = new EventEmitter<Material>();

  //TODO: load the data from API
  filteredMaterials$: Observable<Material[]> = null;

  constructor(private matService: MaterialService){
  };

  ngOnInit() {
    this.filteredMaterials$ = this.control.valueChanges.pipe(
      startWith(''),
      debounceTime(300),
      switchMap(value => {
        if (value !== '') {
          console.log("user typed material:" + value);
          // lookup from github
          return this._filter(value);
        } else {
          // if no value is present, return null
          return of(null);
        }
      })
    );
  }

  private _filter(value: string): Observable<Material[]> {
    const filterValue = this._normalizeValue(value);
    //return this.materials.filter(material => this._normalizeValue(material.name).includes(filterValue));

    return this.matService.search(filterValue).pipe(
      // map the item property of the github results as our return object
      map(results => results),
      // catch errors
      catchError(_ => {
        console.log(_);
        return of(null);
      })
    );
  }

  private _normalizeValue(value: string): string {
    return value.toLowerCase().replace(/\s/g, '');
  }

  displayFn(material: Material): string {
    return material.name;
  }

  onSelectMaterial(id: number)
  {
    console.log("Selected material ID: " + id);
  }
}
