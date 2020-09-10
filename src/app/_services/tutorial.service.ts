import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
const baseUrl = 'https://localhost:8443/api/auth/tutorials';
@Injectable({
  providedIn: 'root'
})
export class TutorialService {

  constructor(private http: HttpClient) { }

  getAll(params): Observable<any> {
    return this.http.get(baseUrl, { params });
  }
  get(id): Observable<any> {
    return this.http.get(`${baseUrl}/${id}`);
  }

  create(data): Observable<any>  {
    return this.http.post(baseUrl, data);
  }

  update(id, data): Observable<any>  {
    return this.http.put(`${baseUrl}/${id}`, data);
  }

  delete(id): Observable<any>  {
    return this.http.delete(`${baseUrl}/${id}`);
  }

  deleteAll(): Observable<any>  {
    return this.http.delete(baseUrl);
  }
}
