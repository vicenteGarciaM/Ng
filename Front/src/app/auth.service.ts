
import { Router } from '@angular/router';

import { HttpClient,HttpResponse } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { environment } from '../environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private isAuthenticated = false;
  private http=inject(HttpClient);
  private URLbase=environment.apiURL+'/identity/login';

  constructor(private router: Router) {}


  login(email: string, password: string): Observable<HttpResponse<any>> {
    return this.http.post<any>(this.URLbase, { email, password }, { observe: 'response' });
  }

  handleLoginResponse(response: HttpResponse<any>): void {
    if (response.status === 200) {
      console.log('Login exitoso');
      this.isAuthenticated = true;
      localStorage.setItem('token', response.body.token); 
      this.router.navigate(['/dashboard']);
    }
  }

  handleLoginError(error: any): void {
    console.error('Error en el login:', error);
    this.isAuthenticated = false;
  }



  isLoggedIn(): boolean {
    return this.isAuthenticated;
  }

  logout(): void {
    this.isAuthenticated = false;
    this.router.navigate(['/auth-login']); 
  }
}
