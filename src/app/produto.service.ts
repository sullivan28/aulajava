import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Produto } from './produto.interface';

@Injectable({
  providedIn: 'root'
})
export class ProdutoService {

  constructor(
    private httpClient: HttpClient
  ) { }

  getProdutos() {
    return this.httpClient.get<Produto[]>('http://localhost:3000/produtos');
  }

  getProduto(id: number) {
    return this.httpClient.get<Produto>('http://localhost:3000/produtos/' + id);
  }

  excluir(produto: Produto) {
    return this.httpClient.delete<Produto>('http://localhost:3000/produtos/' + produto.id);
  }

  salvar(produto: Produto) {
    if(produto.id) {
      return this.httpClient.put('http://localhost:3000/produtos/' + produto.id, produto);
    } else {
      return this.httpClient.post('http://localhost:3000/produtos/', produto);
    }
  }

}
