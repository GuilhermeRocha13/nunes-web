import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms'; // Verifique a importação
import { HttpClientModule } from '@angular/common/http';
import { ProdutoService } from '../produto.service';
import { Produto } from '../produto.model';

@Component({
  selector: 'app-cadastrar',
  standalone: true,
  imports: [FormsModule, HttpClientModule], // Adicione FormsModule aqui
  templateUrl: './cadastrar.component.html',
  styleUrls: ['./cadastrar.component.scss']
})
export class CadastrarComponent {
  produto: Produto = {
    nome: '',
    codigo: '',
    descricao: '',
    preco: 0
  };

  mensagemSucesso: string | null = null;
  mensagemErro: string | null = null;

  constructor(private produtoService: ProdutoService) { }

  onSubmit(): void {
    this.produtoService.addProduto(this.produto).subscribe({
      next: (response) => {
        this.mensagemSucesso = 'Produto cadastrado com sucesso!';
        this.mensagemErro = null;
      },
      error: (err) => {
        this.mensagemErro = 'Ocorreu um erro ao cadastrar o produto.';
        this.mensagemSucesso = null;
      }
    });
  }
}
