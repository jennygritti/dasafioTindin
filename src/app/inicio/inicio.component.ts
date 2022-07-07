import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ListaProduto } from '../model/ListaProduto';
import { Produto } from '../model/Produto';
import { CarrinhoService } from '../service/carrinho.service';
import { ProdutoService } from '../service/produto.service';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {
  produto: Produto = new Produto();
  listaProdutos: Produto[]

  constructor(
    private prod: ProdutoService,
    private route: Router,
    private carrinho: CarrinhoService
  ) { }

  ngOnInit(): void {
    this.getAllProdutos();
  }

  // Pegar todos os produtos para fazer a lista com todos os jogos cadastrados
  getAllProdutos(){
    this.prod.getAllGame().subscribe((resp:ListaProduto)=>{
      this.listaProdutos=resp.games;
    })
  }

  // pegar os produtos por id
  getProdById(id: number){
    this.prod.getIdGame(id).subscribe((resp: Produto) =>{
      this.produto = resp;
      this.addProduto()
      alert("Produto adicionado ao carrinho com sucesso!")
    })
  }
  // adicionar produtos no carrinho
  addProduto(){
    this.carrinho.adicionar(this.produto)
  }

}
