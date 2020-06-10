import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CostSheetComponent } from './cost-sheet.component';

describe('CostSheetComponent', () => {
  let component: CostSheetComponent;
  let fixture: ComponentFixture<CostSheetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CostSheetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CostSheetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
