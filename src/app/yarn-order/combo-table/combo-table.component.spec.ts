import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComboTableComponent } from './combo-table.component';

describe('ComboTableComponent', () => {
  let component: ComboTableComponent;
  let fixture: ComponentFixture<ComboTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComboTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComboTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
