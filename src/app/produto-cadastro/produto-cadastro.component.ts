import { Component, OnInit } from '@angular/core';
import { Produto } from '../produto.interface';
import { ProdutoService } from '../produto.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-produto-cadastro',
  templateUrl: './produto-cadastro.component.html',
  styleUrls: ['./produto-cadastro.component.css']
})
export class ProdutoCadastroComponent implements OnInit {

  produto: Produto;

  constructor(
    private produtoService: ProdutoService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {
    let newLocal = this.produto;
    newLocal = {
      descricao: '',
      preco: 0,
      marca: ''
    };
  }

  ngOnInit() {
    const id = parseInt(this.activatedRoute.snapshot.params.id);
    if(id) {
      this.produtoService
        .getProduto(id)
        .subscribe(produto => this.produto = produto, e => console.log(e));
    }
  } 

  salvar() {
    this.produtoService
      .salvar(this.produto)
      .subscribe(() => this.router.navigate(['']), e => console.log(e));
  }

}
