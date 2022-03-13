import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'; // HttpClient
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable({
  providedIn: 'root'
})
export class JsonLoadService {

  constructor(private http: HttpClient) { }

  getJSON(): Observable<any> {
    return this.http.get('./assets/data/data.json',{responseType: 'text'})
  }
}
