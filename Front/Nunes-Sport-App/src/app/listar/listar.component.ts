import { Component } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { ProdutoService } from '../produto.service';
import { Produto } from '../produto.model';

@Component({
  selector: 'app-listar',
  standalone: true,
  imports: [HttpClientModule],
  templateUrl: './listar.component.html',
  styleUrls: ['./listar.component.scss']
})
export class ListarComponent {
  produtos: Produto[] = [];

  constructor(private produtoService: ProdutoService) {
    this.loadProdutos();
  }

  loadProdutos(): void {
    this.produtoService.getProdutos().subscribe({
      next: (data) => this.produtos = data,
      error: (err) => console.error('Erro ao carregar produtos', err)
    });
  }
}
