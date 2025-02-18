


import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private readonly API_KEY = 'gZVA5hsKNJqFGkaZMJl2vIyyLVwHwj9DgUyO0DKS';
  private readonly API_URL = 'https://api.nasa.gov/planetary/apod';

  constructor(private http: HttpClient) { }

/*   getApod(): Observable<any> {
    return this.http.get<any>(`${this.API_URL}?api_key=${this.API_KEY}`);
  } 
 */

  getApod(startDate: string, endDate: string): Observable<any> {
    return this.http.get<any>(`${this.API_URL}?api_key=${this.API_KEY}&start_date=${startDate}&end_date=${endDate}`);
  }
 
}
