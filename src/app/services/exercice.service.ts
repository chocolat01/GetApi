
import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule,HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ExerciceService {

  constructor(private http: HttpClient) { }

  fetchBicepsExercises() {
    const header = {
      'Content-Type':'application/json',
      //'x-api-key':'pHh+iiqNN8I/kSd9h/5pMg==nmHz1huyefwQPKIw'
    };

    return this.http.get('https://api.api-ninjas.com/v1/exercises?muscle=biceps',{headers:header});
  }
}



