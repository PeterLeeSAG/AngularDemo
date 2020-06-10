import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WeightControlComponent } from './weight-control.component';

describe('WeightControlComponent', () => {
  let component: WeightControlComponent;
  let fixture: ComponentFixture<WeightControlComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WeightControlComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WeightControlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
