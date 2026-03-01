import { Injectable } from '@angular/core';
import { environment } from './app/environments/environment.developmet';
import { Farmer } from './app/entities/Farmer';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Customer } from './app/entities/Customer';

@Injectable({
  providedIn: 'root',
})
export class WebClientService {

  private username: any;
  private password: any;
  private readonly base_url = 'http://localhost:8080';

  constructor(private http: HttpClient,) {

  }

  public postdata<T, U>(url: string, formdata: any): Observable<U> {
    return this.http.post<U>(`${this.base_url}${url}`, formdata);
  }


  public getdata(url: String): Observable<any> {
    return this.http.get<any>(`${this.base_url}${url}`);
  }

  public getdataByid(url: string, formdata: any): Observable<any> {
    return this.http.post<any>(`${this.base_url}${url}`, formdata);
  }

  public putdata(url: string, formdata: any): Observable<any> {
    return this.http.put<any>(`${this.base_url}${url}`, formdata)
  }

  public deletedata(url: string) {
    return this.http.delete<any>(`${this.base_url}${url}`)
  }

  public getdataSingalid(url: string): Observable<any> {
    return this.http.get<any>(`${this.base_url}${url}`);
  }


  // public post<T, U>(url: string, body: T): Observable<U>
  // {
  //   return this.http.post<U>(`${this.base_url}${url}`, body, {
  //     headers: {
  //       TOKEN: this.token ?? ''
  //     }
  //   });


  isLogedIn() {
    return localStorage.getItem('id');
  }

  isAdminLogedIn()
  {
    return localStorage.getItem("aid")
  }

  // isLogedOut()
  // {
  //   sessionStorage.clear();
  // }
  //  public delete<T>(url: string): Observable<T>
  // {
  //   return this.http.delete<T>(`${this.base_url}${url}`, {
  //     headers: {
  //       TOKEN: this.token ?? ''
  //     }
  //   });
  // }

  // public post<T, U>(url: string, body: T): Observable<U>
  // {
  //   return this.http.post<U>(`${this.base_url}${url}`, body, {
  //     headers: {
  //       TOKEN: this.token ?? ''
  //     }
  //   });
  // }

  // public put<T, U>(url: string, body: T): Observable<U>
  // {
  //   return this.http.put<U>(`${this.base_url}${url}`, body, {
  //     headers: {
  //       TOKEN: this.token ?? ''
  //     }
  //   });
  // }
}
