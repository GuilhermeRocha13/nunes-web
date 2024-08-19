import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ProdutoService } from '../produto.service';
import { Produto } from '../produto.model';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-editar',
  standalone: true,
  imports: [FormsModule, HttpClientModule],
  templateUrl: './editar.component.html',
  styleUrls: ['./editar.component.scss']
})
export class EditarComponent implements OnInit {
  produto: Produto = {
    nome: '',
    codigo: '',
    descricao: '',
    preco: 0
  };

  mensagemSucesso: string | null = null;
  mensagemErro: string | null = null;

  constructor(
    private produtoService: ProdutoService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.loadProduto(Number(id));
    }
  }

  loadProduto(id: number): void {
    this.produtoService.getProduto(id).subscribe({
      next: (data) => this.produto = data,
      error: (err) => console.error('Erro ao carregar produto', err)
    });
  }

  onSubmit(): void {
    const id = this.produto.codigo; // Supondo que o código é usado como id. Ajuste conforme necessário.
    this.produtoService.updateProduto(id, this.produto).subscribe({
      next: () => {
        this.mensagemSucesso = 'Produto atualizado com sucesso!';
        this.mensagemErro = null;
        this.router.navigate(['./']);
      },
      error: (err) => {
        this.mensagemErro = 'Ocorreu um erro ao atualizar o produto.';
        this.mensagemSucesso = null;
      }
    });
  }
}
