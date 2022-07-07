import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ListaProduto } from '../model/ListaProduto';
import { Produto } from '../model/Produto';
import { UserLogin } from '../model/UserLogin';
import { AuthService } from '../service/auth.service';
import { ProdutoService } from '../service/produto.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  user: UserLogin = new UserLogin();
  listaProdutos: Produto[];
  nomeProduto: string

  constructor(
    public auth: AuthService,
    private prod: ProdutoService,

  ) { }

  ngOnInit(): void {
  }

  getAllProdutos(){
    this.prod.getAllGame().subscribe((resp:ListaProduto)=>{
      this.listaProdutos=resp.games;
    })
  }

  findByTituloProduto(){
    if(this.nomeProduto == ''){
      this.getAllProdutos()
    } else{
        this.prod.getByNameGame(this.nomeProduto).subscribe((resp: Produto[]) =>{
          this.listaProdutos = resp
    })
  }
}

  sair() {
    localStorage.clear();
  }

}
