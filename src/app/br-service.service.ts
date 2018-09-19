import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { httpFactory } from '@angular/http/src/http_module';
import { RequestOptions } from '@angular/http/src/base_request_options';
import { ItemStore } from './models/itemStore';

@Injectable({
  providedIn: 'root'
})
export class BrService {

  // Configuration
  apiKey = "2f952687a23f2f3fa1935e138053e4e1"
  brStoreItemsURL = "https://fortnite-public-api.theapinetwork.com/prod09/store/get"

  // Proper variables
  headers : Headers;
  configUrl = 'assets/itemStore.json';


  
  constructor(private http: HttpClient) { 
  }



  getItemShopItems() : Observable<any>{

    const httpOptions = {
      headers: new HttpHeaders({
        'Content-type': 'application/json',
        'Authorization': '2f952687a23f2f3fa1935e138053e4e1'
      })
    }

    return this.http.post(this.brStoreItemsURL, {'language': 'en'}, httpOptions);

    // return this.http.get(this.configUrl);
  }

}
