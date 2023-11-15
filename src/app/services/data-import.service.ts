import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DataImportService {
  private postapiUrl = 'http://localhost:5248/api/import';
  private getapiUrl = 'http://localhost:5248/api/import/progress';

  constructor(private http: HttpClient) {}

  startImport(): Observable<any> {
    return this.http.post<any>(`${this.postapiUrl}`, {});
  }

  getProgress(): Observable<any> {
    return this.http.get(`${this.getapiUrl}`, {});
  }
}