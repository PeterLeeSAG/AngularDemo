import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpParams, HttpResponse } from '@angular/common/http';
import { throwError, Observable } from 'rxjs';
import { retry, catchError, tap, map } from 'rxjs/operators';
import { Company } from '../models/company';

@Injectable({
  providedIn: 'root'
})

export class SupplierService {

  private SERVER_URL = "http://localhost:3000/";
  private ITEM_NAME = "suppliers"; //default item name
  private companies: Company[] = [];
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

  public get(name: string, limit: number){
    //http://localhost:3000/suppliers?name_like=n&_limit=100&_sort=name&_order=asc
    //Load the WebApi
    //add the parameters to the url
    var params = new HttpParams({
      fromString: (name==null? "" :(this.fieldName +"_like=" + name)) 
      + "&_limit=" + limit 
      + "&_sort=" + this.fieldName + "&_order=asc"});

    this.http
    .get<Company[]>(this.SERVER_URL + this.ITEM_NAME, {
      params: params, 
        observe: "body"})
    .subscribe((companies) => {
      this.companies = companies;
    });

    return this.companies;
  }

  public getAll(){
    return this.http
    .get<Company[]>(this.SERVER_URL + this.ITEM_NAME, {observe: "response"})
    .subscribe(res => {
      let response: HttpResponse<Company[]> = res;
      return response;
    });
  }

  public search(query: string): Observable<Company[]> {
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
        map(suppliers => {
          var companies: Company[] = [];
          if (suppliers != undefined)
          {
            suppliers.forEach(supplier => {
              companies.push(new Company(supplier.id, "", supplier.name));
            });
          }
          return companies;
        })
      );
  }
}
