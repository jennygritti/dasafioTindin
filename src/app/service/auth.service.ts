import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.prod';
import { UserLogin } from '../model/UserLogin';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private http: HttpClient
  ) { }

  token={
    headers: new HttpHeaders().set('Authorization', environment.token)
  }

  refreshToken(){
    this.token={
      headers: new HttpHeaders().set('Authorization', environment.token)
    }
  }


  logar(userLogin: UserLogin): Observable<UserLogin>{
    return this.http.post<UserLogin>('https://api-labs.tindin.com.br/auth', userLogin)
  }

  logado(){
    let ok: boolean = false
    if(environment.token != ''){
      ok=true
    }
    return ok
  }



}
