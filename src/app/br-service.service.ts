import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { httpFactory } from '@angular/http/src/http_module';

@Injectable({
  providedIn: 'root'
})
export class BrService {

  constructor(private http: HttpClient) { }

  getItemShopItems() : Observable<string>{

    var returnText;

    this.http.get('https://api.fortnitetracker.com/v1/store').subscribe(text => returnText = text);

    return of(returnText);
  }

}
