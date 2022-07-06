import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Produto } from '../model/Produto';
import { CarrinhoService } from '../service/carrinho.service';
import { ProdutoService } from '../service/produto.service';

@Component({
  selector: 'app-detalhe-produto',
  templateUrl: './detalhe-produto.component.html',
  styleUrls: ['./detalhe-produto.component.css']
})
export class DetalheProdutoComponent implements OnInit {
  produto: Produto = new Produto();
  idProd: number

  constructor(

  private prod: ProdutoService,
  private route: ActivatedRoute,
  private carrinho: CarrinhoService
) {}

ngOnInit() {
  this.idProd = this.route.snapshot.params['id']
}

addProduto(){
  this.carrinho.adicionar(this.produto)
  console.log(this.carrinho.produtos)
}

}
