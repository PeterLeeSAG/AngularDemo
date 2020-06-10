import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WeightInfoComponent } from './weight-info.component';

describe('WeightInfoComponent', () => {
  let component: WeightInfoComponent;
  let fixture: ComponentFixture<WeightInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WeightInfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WeightInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
