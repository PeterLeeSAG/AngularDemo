import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AutocompleteMaterialDropdownComponent } from './autocomplete-material-dropdown.component';

describe('AutocompleteMaterialDropdownComponent', () => {
  let component: AutocompleteMaterialDropdownComponent;
  let fixture: ComponentFixture<AutocompleteMaterialDropdownComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AutocompleteMaterialDropdownComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AutocompleteMaterialDropdownComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
