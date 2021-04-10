import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Day } from './day';

@Injectable({
  providedIn: 'root'
})
export class DayService {

  private apiServerUrl = environment.apiBaseUrl;

    constructor(private http: HttpClient) { }

    public getAllDays(): Observable<Day[]> {
        return this.http.get<Day[]>(`${this.apiServerUrl}/day/all`);
    }

    public getDayById(dayId: number): Observable<Day> {
      return this.http.get<Day>(`${this.apiServerUrl}/day/find/${dayId}`);
  }

    public addDay(day: Day): Observable<Day> {
        return this.http.post<Day>(`${this.apiServerUrl}/day/add`, day);
    }

    public updateDay(day: Day): Observable<Day> {
        return this.http.put<Day>(`${this.apiServerUrl}/day/update`, day);
    }

    public deleteDay(dayId: number): Observable<void> {
        return this.http.delete<void>(`${this.apiServerUrl}/day/delete/${dayId}`);
    }
}
