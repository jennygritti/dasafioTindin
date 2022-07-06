import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment.prod';
import { Produto } from '../model/Produto';
import { UserLogin } from '../model/UserLogin';
import { ProdutoService } from './../service/produto.service';

@Component({
  selector: 'app-cadastro-produto',
  templateUrl: './cadastro-produto.component.html',
  styleUrls: ['./cadastro-produto.component.css']
})
export class CadastroProdutoComponent implements OnInit {

  idUser= environment.id

  produto: Produto = new Produto();
  user: UserLogin = new UserLogin();

  constructor(
  private prod: ProdutoService,
  private router: Router
  ) { }

  ngOnInit(): void {
  }

  cadProduto(){
    this.user.id = this.idUser;
    this.produto.user = this.user;

    this.prod.insertGame(this.produto).subscribe((resp: Produto) => {
      this.produto = resp;
      alert("Produto cadastrado com sucesso!");
      this.produto = new Produto();
      this.router.navigate(['/inicio'])
    });
  }

}
