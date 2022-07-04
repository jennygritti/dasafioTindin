import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UserLogin } from '../model/UserLogin';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private http: HttpClient
  ) { }
  

  logar(userLogin: UserLogin): Observable<UserLogin>{
    return this.http.post<UserLogin>('https://api-labs.tindin.com.br/auth', userLogin)
  }
}