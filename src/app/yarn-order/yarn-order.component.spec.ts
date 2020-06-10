import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { YarnOrderComponent } from './yarn-order.component';

describe('YarnOrderComponent', () => {
  let component: YarnOrderComponent;
  let fixture: ComponentFixture<YarnOrderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ YarnOrderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(YarnOrderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
