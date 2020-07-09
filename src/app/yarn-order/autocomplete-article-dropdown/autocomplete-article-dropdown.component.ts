import { Component, OnInit, EventEmitter, Input, Output } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable, of } from 'rxjs';
import { startWith, map, switchMap, debounceTime, catchError } from 'rxjs/operators';
import { ArticleService } from '../../services/article.service';

@Component({
  selector: 'app-autocomplete-article-dropdown',
  templateUrl: './autocomplete-article-dropdown.component.html',
  styleUrls: ['./autocomplete-article-dropdown.component.css']
})
export class AutocompleteArticleDropdownComponent implements OnInit {
  @Input() article : string;
  @Output() articleInputted = new EventEmitter<string>();

  control = new FormControl();
  filteredArticles$: Observable<String[]> = null;

  constructor(private articleService: ArticleService){};

  ngOnInit() {
    this.filteredArticles$ = this.control.valueChanges.pipe(
      startWith(''),
      debounceTime(300),
      switchMap(value => {
        if (value !== '') {
          console.log("user typed article:" + value);
          return this._filter(value);
        } else {
          // if no value is present, return null
          return of(null);
        }
      })
    );
  }

  private _filter(value: string): Observable<String[]> {
    const filterValue = value;
    
    return this.articleService.search(filterValue).pipe(
      map(results => results),
      // catch errors
      catchError(_ => {
        console.log(_);
        return of(null);
      })
    );
  }
}
