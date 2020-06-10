import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderHeadComponent } from './order-head.component';

describe('OrderHeadComponent', () => {
  let component: OrderHeadComponent;
  let fixture: ComponentFixture<OrderHeadComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrderHeadComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrderHeadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
