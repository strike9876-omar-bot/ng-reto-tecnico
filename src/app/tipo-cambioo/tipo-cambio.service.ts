import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TipoCambioService {

  API_BASE  = 'http://localhost:8080/exchangeHouse'

  constructor(
    private httpClient: HttpClient,

    ) { }


  public getChange(formRequest: any): Observable<any> {
    return this.httpClient.post<any>( `${this.API_BASE}/applyCurrencyChange`, formRequest);
  }

  public getList(): Observable<any> {
    return this.httpClient.get<any>(  `${this.API_BASE}/getList`);
  }

  public addList(): Observable<any> {
    return this.httpClient.get<any>(  `${this.API_BASE}/addCurrencyValues`);
  }

  public addValueTolist(formRequest: any): Observable<any> {
    return this.httpClient.post<any>(  `${this.API_BASE}/addCurrencyValues`, formRequest);
  }
}
