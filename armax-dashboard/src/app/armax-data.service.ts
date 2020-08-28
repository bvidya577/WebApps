import { Injectable } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';
import {
  HttpClient,
  HttpHeaders,
  HttpErrorResponse,
} from '@angular/common/http';
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
};

const apiUrl = 'http://localhost:4200/assets';
@Injectable({
  providedIn: 'root',
})
export class ArmaxDataService {
  constructor(private http: HttpClient) {}

  getProduct(): Observable<any> {
    const url = `${apiUrl}/inverterHeatMap.json`;
    return this.http.get<any>('assets/inverterHeatMap.json');
  }
  getEvents(): Observable<any> {
    const url = `${apiUrl}/events.json`;
    return this.http.get<any>('assets/events.json');
  }
  getControlstatus(): Observable<any> {
    const url = `${apiUrl}/controlstatus.json`;
    return this.http.get<any>('assets/controlstatus.json');
  }
}
