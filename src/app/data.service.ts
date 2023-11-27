import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class MyDataService {

  constructor(private http: HttpClient) { }
  getData(): Observable<any> {
    console.log('Fetching data...');
    // return this.http.get('/assets/data.json');
    return this.http.get('/assets/iris.json');
  }
}
