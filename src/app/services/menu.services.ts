import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpParams, HttpResponse } from '@angular/common/http';
import { throwError, Observable } from 'rxjs';
import { retry, catchError, tap, map } from 'rxjs/operators';
import { MenuItem } from '../../app/models/MenuItem';

@Injectable({
  providedIn: 'root'
})

export class MenuService {

  private SERVER_URL = "http://localhost:3000/";
  private ITEM_NAME = "menus"; //default item name
  private menuItems: MenuItem[] = [];
  private fieldName = "departmentID"; //0 = root
 
  constructor(private http: HttpClient) { 
    this.loadDefaultData();
  }

  //TODO: add about new module for managing the system menu
  private loadDefaultData()
  {
    var nestMenu = new MenuItem("HOME", "/home");
    nestMenu.subMenu = [];
    nestMenu.subMenu.push(new MenuItem("SUB-HOME", "/home"));
    this.menuItems.push(nestMenu);
    this.menuItems.push(new MenuItem("HOME", "/home"));
    this.menuItems.push(new MenuItem("ABOUT", "/about"));
    this.menuItems.push(new MenuItem("YARN ORDER", "/yarnOrder"));
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

  public get(){
    return this.menuItems;
  }

  public getAll(){
    return this.http
    .get<any[]>(this.SERVER_URL + this.ITEM_NAME, {observe: "response"})
    .subscribe(res => {
      let response: HttpResponse<any[]> = res;
      return response;
    });
  }

  public search(query: string): Observable<MenuItem[]> {
    //add the parameters to the url
    var params = new HttpParams();
    params = params.append(this.fieldName + "_like", encodeURI(query));
    params = params.append("_sort", "recIndex");
    params = params.append("_order", 'asc');

    const url = this.SERVER_URL + this.ITEM_NAME;
    return this.http
        .get<any[]>(url, {
        observe: 'body',
        params: params
        })
        .pipe(
        map((menus) => {
            if (menus != undefined)
            {
            menus.forEach(menu => {
                this.menuItems.push(menu);
            });
            }
            return this.menuItems;
        })
        );
  }
}
