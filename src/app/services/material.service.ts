import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpParams, HttpResponse } from '@angular/common/http';
import { throwError } from 'rxjs';
import { retry, catchError, tap } from 'rxjs/operators';
import { Material } from '../models/material';

@Injectable({
  providedIn: 'root'
})

export class MaterialService {

  private SERVER_URL = "http://localhost:3000/";
  private ITEM_NAME = "materials"; //default item name
  public materials: Material[] = [];
 
  constructor(private httpClient: HttpClient) { 
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
    return this.httpClient.get(this.SERVER_URL + this.ITEM_NAME, { params: new HttpParams({fromString: "_page=1&_limit=20"}), observe: "response"}).pipe(retry(3), catchError(this.handleError), tap(res => {
      console.log(res.headers.get('Link'));
      this.parseLinkHeader(res.headers.get('Link'));
    }));
  }

  public sendGetRequestToUrl(url: string){  
    return this.httpClient.get(url, { observe: "response"}).pipe(retry(3), 			
    catchError(this.handleError), tap(res => {  
      console.log(res.headers.get('Link'));  
      this.parseLinkHeader(res.headers.get('Link'));
    }));  
  }

  public get(){
    return this.httpClient.get(this.SERVER_URL + this.ITEM_NAME);
  }

  public getAll(){
    return this.httpClient
    .get<Material[]>(this.SERVER_URL + this.ITEM_NAME, {observe: "response"})
    .subscribe(res => {
      let response: HttpResponse<Material[]> = res;
      return response;
    });
  }
}
