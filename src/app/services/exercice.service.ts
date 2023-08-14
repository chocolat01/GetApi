import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class ExerciceService {
  apiKey = environment.apiKey; // Utilisez la clé d'API de l'environnement

  constructor(private http: HttpClient) { }

  fetchBicepsExercises() {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'x-api-key': this.apiKey
    });

    return this.http.get('https://api.api-ninjas.com/v1/exercises?muscle=biceps', { headers });
  }
}