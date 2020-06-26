import { Component, OnInit } from '@angular/core';
import { ProdutoService } from './produto.service';
import { Produto } from './produto.interface';
import { Router } from '@angular/router';

@Component({
  selector: 'app-produto-listagem',
  templateUrl: './produto-listagem.component.html',
  styleUrls: ['./produto-listagem.component.css']
})
export class ProdutoListagemComponent implements OnInit {

  produtos: Produto[];

  constructor(
    private produtoService: ProdutoService
    
  ) { }

  ngOnInit(): void {
    this.listar();
  }

  excluir(produto: Produto) {
    this.produtoService
      .excluir(produto)
      .subscribe(() => this.listar(), e => console.log(e));
  }

