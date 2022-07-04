import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../model/User';
import { UserLogin } from '../model/UserLogin';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  userLogin: UserLogin = new UserLogin
  user: User = new User
  confirmarSenha: string

  constructor(
    private auth: AuthService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  confirmSenha(event: any){
    this.confirmarSenha = event.target.value

  }

  cadastrar(){
    this.user.tipo = 'cliente';
    if (this.user.password == this.confirmarSenha) {
      this.auth.cadastrar(this.user).subscribe((resp: User) => {
        this.user = resp;
        alert('Usuário cadastrado com sucesso');
        this.router.navigate(['/inicio']);
      });
    } else {
      alert('As senhas não coincidem');
    }
  }

}
