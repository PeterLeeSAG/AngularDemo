import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComboOrderDetailsComponent } from './combo-order-details.component';

describe('ComboOrderDetailsComponent', () => {
  let component: ComboOrderDetailsComponent;
  let fixture: ComponentFixture<ComboOrderDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComboOrderDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComboOrderDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
