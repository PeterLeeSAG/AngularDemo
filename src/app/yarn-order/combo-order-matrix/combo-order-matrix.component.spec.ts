import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComboOrderMatrixComponent } from './combo-order-matrix.component';

describe('ComboOrderMatrixComponent', () => {
  let component: ComboOrderMatrixComponent;
  let fixture: ComponentFixture<ComboOrderMatrixComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComboOrderMatrixComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComboOrderMatrixComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
