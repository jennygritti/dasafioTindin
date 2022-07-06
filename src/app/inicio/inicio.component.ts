import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Produto } from '../model/Produto';
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
  ) { }

  ngOnInit(): void {
  }

  getAllProdutos(){
    this.prod.getAllGame().subscribe((resp:Produto[])=>{
      this.listaProdutos=resp
    })
  }

}
