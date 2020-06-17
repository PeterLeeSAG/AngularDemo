import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StyleHeadComponent } from './style-head.component';

describe('StyleHeadComponent', () => {
  let component: StyleHeadComponent;
  let fixture: ComponentFixture<StyleHeadComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StyleHeadComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StyleHeadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
