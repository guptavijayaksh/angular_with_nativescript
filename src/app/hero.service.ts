import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HeroService {
 private baseUrl = 'assets/items.json';

 constructor(private http:HttpClient) { }

 getEquips(): Observable<any> {
   return this.http.get(`${this.baseUrl}`);
 }

}
