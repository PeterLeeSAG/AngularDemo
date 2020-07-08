import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpParams, HttpResponse } from '@angular/common/http';
import { throwError, Observable } from 'rxjs';
import { retry, catchError, tap, map } from 'rxjs/operators';
import { Material } from '../models/material';

@Injectable({
  providedIn: 'root'
})

export class MaterialService {

  private SERVER_URL = "http://localhost:3000/";
  private ITEM_NAME = "materials"; //default item name
  private materials: Material[] = [];
  private fieldName = "name";
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

  parseLinkHeader(header) {
    if (header.length == 0) {
      return ;
    }

    let parts = header.split(',');
    var links = {};
    parts.forEach( p => {
      let section = p.split(';');
      var url = section[0].replace(/<(.*)>/, '$1').trim();
      var name = section[1].replace(/rel="(.*)"/, '$1').trim();
      links[name] = url;
    });
  }

  public sendGetRequest(){
    // return this.httpClient.get(this.SERVER_URL).pipe(catchError(this.handleError));
    // Add safe, URL encoded _page and _limit parameters 
    return this.http.get(this.SERVER_URL + this.ITEM_NAME, { params: new HttpParams({fromString: "_page=1&_limit=20"}), observe: "response"}).pipe(retry(3), catchError(this.handleError), tap(res => {
      console.log(res.headers.get('Link'));
      this.parseLinkHeader(res.headers.get('Link'));
    }));
  }

  public sendGetRequestToUrl(url: string){  
    return this.http.get(url, { observe: "response"}).pipe(retry(3), 			
    catchError(this.handleError), tap(res => {  
      console.log(res.headers.get('Link'));  
      this.parseLinkHeader(res.headers.get('Link'));
    }));  
  }

  public get(name: string, limit: number){
    //http://localhost:3000/Materials?name_like=wool&_limit=100&_sort=name&_order=asc
    //Load the WebApi
    //add the parameters to the url
    var params = new HttpParams({
      fromString: (name==null? "" :(this.fieldName + "_like=" + name)) 
      + "&_limit=" + limit 
      + "&_sort=" + this.fieldName + "&_order=asc"});

    this.http
    .get<Material[]>(this.SERVER_URL + this.ITEM_NAME, {
      params: params, 
        observe: "body"})
    .subscribe((materials) => {
      this.materials = materials;
    });

    return this.materials;
  }

  public getAll(){
    return this.http
    .get<Material[]>(this.SERVER_URL + this.ITEM_NAME, {observe: "response"})
    .subscribe(res => {
      let response: HttpResponse<Material[]> = res;
      return response;
    });
  }

  public search(query: string): Observable<Material[]> {
    //add the parameters to the url
    var params = new HttpParams();
    params = params.append(this.fieldName + "_like", encodeURI(query));
    params = params.append("_limit", '50');
    params = params.append("_sort", this.fieldName);
    params = params.append("_order", 'asc');

    const url = this.SERVER_URL + this.ITEM_NAME;
    return this.http
      .get<Material[]>(url, {
        observe: 'body',
        params: params        
      })
      .pipe(
        map((materials) => {
          return materials;
        })
      );
  }
}
