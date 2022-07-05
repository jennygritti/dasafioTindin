import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment.prod';
import { UserLogin } from '../model/UserLogin';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  userLogin: UserLogin = new UserLogin
  confirmarSenha: string

  constructor(
    private auth: AuthService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }


  logar() {
    this.auth.logar(this.userLogin).subscribe({next:(resp: UserLogin) => {
        this.userLogin = resp;
        environment.token = this.userLogin.token;
        environment.email = this.userLogin.email;
        environment.senha = this.userLogin.password;


        alert('Logado com sucesso!!')

        this.router.navigate(['/inicio'], {queryParams: {userLogin: environment.id} })},
      error: error => {
        if (error.status === 401) {
          alert('Usuário ou senha inválido');
        }
      }
    })
  }
}
