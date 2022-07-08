import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Produto } from '../model/Produto';
import { UnicoProduto } from '../model/UnicoProduto';
import { CarrinhoService } from '../service/carrinho.service';
import { ProdutoService } from '../service/produto.service';

@Component({
  selector: 'app-detalhe-produto',
  templateUrl: './detalhe-produto.component.html',
  styleUrls: ['./detalhe-produto.component.css']
})
export class DetalheProdutoComponent implements OnInit {

  produto: Produto = new Produto();

  constructor(
    private prod: ProdutoService,
    private route: ActivatedRoute,
    private carrinho: CarrinhoService
  ) {}

  ngOnInit() {
    this.route.params.subscribe((params) => {
      this.getProdById(params['_id']);
    });
  }

  getProdById(_id: string){
    this.prod.getIdGame(_id).subscribe((resp: UnicoProduto) =>{
      this.produto = resp.game;
      this.addProduto()
    })
  }

  addProduto(){
    this.carrinho.adicionar(this.produto)
    console.log(this.carrinho.produtos)
  }

}
