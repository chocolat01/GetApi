import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.development';
//import { environment } from '../environments/environment'; // Importez l'environnement correspondant

@Injectable()
export class AuthInterceptorInterceptor implements HttpInterceptor {
  apiKey = environment.apiKey; // Utilisez la clé d'API de l'environnement

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    const modifiedRequest = request.clone({
      setHeaders: {
        'x-api-key': this.apiKey
      }
    });

    return next.handle(modifiedRequest);
  }
}