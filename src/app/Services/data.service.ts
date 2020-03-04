import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class DataService {

  constructor(public http: HttpClient) { }

  GetStudentData(): Observable<any> {
    return this.http.get('https://www.jsonblob.com/api/jsonblob/85d4b536-5e22-11ea-a136-8fb8e93df6a8');
  }

  GetWeatherData(): Observable<any> {
    return this.http.get('http://api.openweathermap.org/data/2.5/weather?q=Galway&APPID=0de81bf4ce8fb35f01c0608877f0b9f3');
  }
}