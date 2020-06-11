import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComboTopComponent } from './combo-top.component';

describe('ComboTopComponent', () => {
  let component: ComboTopComponent;
  let fixture: ComponentFixture<ComboTopComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComboTopComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComboTopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
