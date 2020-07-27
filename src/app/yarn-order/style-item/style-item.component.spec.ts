import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StyleItemComponent } from './style-item.component';

describe('StyleItemComponent', () => {
  let component: StyleItemComponent;
  let fixture: ComponentFixture<StyleItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StyleItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StyleItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
