import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AutocompleteSupplierDropdownComponent } from './autocomplete-supplier-dropdown.component';

describe('AutocompleteSupplierDropdownComponent', () => {
  let component: AutocompleteSupplierDropdownComponent;
  let fixture: ComponentFixture<AutocompleteSupplierDropdownComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AutocompleteSupplierDropdownComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AutocompleteSupplierDropdownComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
