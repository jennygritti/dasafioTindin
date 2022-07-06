import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.prod';
import { Produto } from '../model/Produto';

@Injectable({
  providedIn: 'root'
})
export class ProdutoService {

  token={
    headers: new HttpHeaders().set('x-api-key', environment.token)
  }

  refreshToken(){
    this.token={
      headers: new HttpHeaders().set('x-api-key', environment.token)
    }
  }

  constructor(
    private http: HttpClient
  ) { }

  // deletar produto
  gameIdDelete(id:number){
    return this.http.delete(`https://api-labs.tindin.com.br/games/{gameId}`, this.token)
  }

  // get lista de produtos
  getAllGame(): Observable<Produto[]>{
    return this.http.get<Produto[]>('https://api-labs.tindin.com.br/games')
  }

  //get produtos por id
  getIdGame():Observable<Produto>{
    return this.http.get<Produto>('https://api-labs.tindin.com.br/games/{gameId}')
  }

  // inserir produto
  insertGame(produto: Produto): Observable<Produto>{
    this.refreshToken();
    return this.http.post<Produto>('https://api-labs.tindin.com.br/games', produto, this.token)
}

}