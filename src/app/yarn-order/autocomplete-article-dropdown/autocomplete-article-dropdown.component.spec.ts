import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AutocompleteArticleDropdownComponent } from './autocomplete-article-dropdown.component';

describe('AutocompleteArticleDropdownComponent', () => {
  let component: AutocompleteArticleDropdownComponent;
  let fixture: ComponentFixture<AutocompleteArticleDropdownComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AutocompleteArticleDropdownComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AutocompleteArticleDropdownComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
