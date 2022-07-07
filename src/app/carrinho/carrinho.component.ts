import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment.prod';
import { Produto } from '../model/Produto';
// import { AlertasService } from '../service/alertas.service';
import { CarrinhoService } from '../service/carrinho.service';

@Component({
  selector: 'app-carrinho',
  templateUrl: './carrinho.component.html',
  styleUrls: ['./carrinho.component.css']
})
export class CarrinhoComponent implements OnInit {

  produtos: Produto[] = []
  listaCompras = this.carrinho.listar()
  comprados = this.carrinho.listar();

  constructor(
    private carrinho: CarrinhoService,
    private router: Router,
    // private alerta: AlertasService
  ) {}

  ngOnInit() {

    window.scroll(0,0)

  }

  total() {
    return this.comprados.map((item) => item.mediumPrice).reduce((a, b) => a + b, 0);
  }

  enviar(){
    this.carrinho.limpar()
    alert('Compra realizada com sucesso!')
    this.router.navigate(["/inicio"])
  }

  removerAll() {
    this.carrinho.limpar()
    this.router.navigate(["/inicio"])
  }



}
