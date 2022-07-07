import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.prod';
import { ListaProduto } from '../model/ListaProduto';
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
  gameIdDelete(_id:number){
    return this.http.delete(`https://api-labs.tindin.com.br/games/{gameId}${_id}`, this.token)
  }

  // buscar por lista de produtos
  getAllGame(): Observable<ListaProduto>{
    return this.http.get<ListaProduto>('https://api-labs.tindin.com.br/games')
  }

  //buscar pelo nome do jogo
  getByNameGame(title: string): Observable<Produto[]>{
    return this.http.get<Produto[]>(`https://api-labs.tindin.com.br/games${title}`)
  }

  //buscar produtos por id
  getIdGame(_id:number):Observable<Produto>{
    return this.http.get<Produto>(`https://api-labs.tindin.com.br/games/{gameId}${_id}`)
  }

  // inserir produto
  insertGame(produto: Produto): Observable<Produto>{
    this.refreshToken();
    return this.http.post<Produto>('https://api-labs.tindin.com.br/games', produto, this.token)
}
  //editar produto
  putGame(produto: Produto): Observable<Produto>{
    this.refreshToken();
    return this.http.put<Produto>('https://api-labs.tindin.com.br/games', produto, this.token)
  }

}