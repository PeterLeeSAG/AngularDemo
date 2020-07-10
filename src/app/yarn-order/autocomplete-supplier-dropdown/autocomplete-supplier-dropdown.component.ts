import { Component, OnInit, EventEmitter, Input, Output  } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable, of } from 'rxjs';
import { startWith, map, switchMap, debounceTime, catchError } from 'rxjs/operators';
import { Company } from '../../models/company'; //data model of company
import { SupplierService } from '../../services/supplier.service';

@Component({
  selector: 'app-autocomplete-supplier-dropdown',
  templateUrl: './autocomplete-supplier-dropdown.component.html',
  styleUrls: ['./autocomplete-supplier-dropdown.component.css']
})
export class AutocompleteSupplierDropdownComponent implements OnInit {
  control = new FormControl();
  @Input() supplierValue: Company;
  @Output() supplierSelected = new EventEmitter<Company>();

  //TODO: load the data from API
  filteredSuppliers$: Observable<Company[]> = null;

  constructor(private supplierService: SupplierService){
  };

  ngOnInit() {
    this.control.setValue(this.supplierValue);
    this.filteredSuppliers$ = this.control.valueChanges.pipe(
      startWith(''),
      debounceTime(300),
      switchMap(value => {
        if (value !== '') {
          console.log("user typed supplier:" + value);
          // lookup from github
          return this._filter(value);
        } else {
          // if no value is present, return null
          return of(null);
        }
      })
    );
  }

  private _filter(value: string): Observable<Company[]> {
    const filterValue = this._normalizeValue(value);

    return this.supplierService.search(filterValue).pipe(
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

  public onSelectSupplier(event)
  {
    console.log(event.option.value);
    this.supplierSelected.emit(event.option.value);
  }

  getOptionSupplierName(option: Company)
  {
    if(option !== undefined)
    {
      return option.englishName;
    }
  }
}
