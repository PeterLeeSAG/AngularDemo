import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComboHeadComponent } from './combo-head.component';

describe('ComboHeadComponent', () => {
  let component: ComboHeadComponent;
  let fixture: ComponentFixture<ComboHeadComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComboHeadComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComboHeadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
