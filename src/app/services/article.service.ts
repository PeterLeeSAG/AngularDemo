import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpParams, HttpResponse } from '@angular/common/http';
import { throwError, Observable } from 'rxjs';
import { retry, catchError, tap, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})

export class ArticleService {

  private SERVER_URL = "http://localhost:3000/";
  private ITEM_NAME = "articles"; //default item name
  private articles: String[] = [];
  private fieldName = "text";
  private _limit: number = 100;
 
  constructor(private http: HttpClient) { 
  }

  setItemName(itemName: string)
  {
    this.ITEM_NAME = itemName;
  }

  handleError(error: HttpErrorResponse)
  {
    let errorMessage = 'Unknown error';
    if (error.error instanceof ErrorEvent){
      // Client side errors
      errorMessage = `Error: ${error.error.message}`;
    } else {
      // Server side errors
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    window.alert(errorMessage);
    return throwError(errorMessage);    
  }

  public get(name: string, limit: number){
    //http://localhost:3000/articles?text_like=n&_limit=100&_sort=test&_order=asc
    //Load the WebApi
    //add the parameters to the url
    var params = new HttpParams({
      fromString: (name==null? "" :(this.fieldName + "_like=" + name)) 
      + "&_limit=" + limit 
      + "&_sort=" + this.fieldName + "&_order=asc"});

    this.http
    .get<String[]>(this.SERVER_URL + this.ITEM_NAME, {
      params: params, 
      observe: "body"})
    .subscribe((articles) => {
      this.articles = articles;
    });

    return this.articles;
  }

  public getAll(){
    return this.http
    .get<any[]>(this.SERVER_URL + this.ITEM_NAME, {observe: "response"})
    .subscribe(res => {
      let response: HttpResponse<any[]> = res;
      return response;
    });
  }

  public search(query: string): Observable<String[]> {
    //add the parameters to the url
    var params = new HttpParams();
    params = params.append(this.fieldName + "_like", encodeURI(query));
    params = params.append("_limit", '50');
    params = params.append("_sort", this.fieldName);
    params = params.append("_order", 'asc');

    const url = this.SERVER_URL + this.ITEM_NAME;
    return this.http
      .get<any[]>(url, {
        observe: 'body',
        params: params
      })
      .pipe(
        map((articles) => {
          if (articles != undefined)
          {
            articles.forEach(article => {
              this.articles.push(article.text);
            });
          }
          return this.articles;
        })
      );
  }
}
