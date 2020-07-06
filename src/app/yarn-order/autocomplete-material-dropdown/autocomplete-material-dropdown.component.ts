import {Component, OnInit} from '@angular/core';
import {FormControl} from '@angular/forms';
import {Observable} from 'rxjs';
import {startWith, map} from 'rxjs/operators';
import { Material } from '../../models/material'; //data model of material

@Component({
  selector: 'app-autocomplete-material-dropdown',
  templateUrl: './autocomplete-material-dropdown.component.html',
  styleUrls: ['./autocomplete-material-dropdown.component.css']
})
export class AutocompleteMaterialDropdownComponent implements OnInit {
  control = new FormControl();
  //TODO: load the data from API
  materials: Material[] = [
    {"id":1,"matName":"2/10 100% cotton"},
    {"id":2,"matName":"2/10 90% cotton 10% Lycra"},
    {"id":3,"matName":"2/10 80% cotton 20% Lycra"},
    {"id":4,"matName":"2/10 70% cotton 30% Lycra"}
  ];
  filteredMaterials: Observable<Material[]>;

  ngOnInit() {
    this.filteredMaterials = this.control.valueChanges.pipe(
      startWith(''),
      map(value => this._filter(value))
    );
  }

  private _filter(value: string): Material[] {
    const filterValue = this._normalizeValue(value);
    return this.materials.filter(material => this._normalizeValue(material.matName).includes(filterValue));
  }

  private _normalizeValue(value: string): string {
    return value.toLowerCase().replace(/\s/g, '');
  }
}
