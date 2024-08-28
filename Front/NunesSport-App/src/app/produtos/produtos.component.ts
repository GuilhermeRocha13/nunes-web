import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-produtos',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './produtos.component.html',
  styleUrls: ['./produtos.component.scss'],
})
export class ProdutosComponent implements OnInit {
  public produtos: any;
  public formInvalido: any;
  public selectedProduct: any;

  constructor(private http: HttpClient, private modalService: NgbModal) {}

  ngOnInit(): void {
    this.getProdutos();
  }

  public getProdutos(): void {
    this.http.get('http://localhost:5196/api/Produtos').subscribe(
      (response) => {
        console.log(response);
        this.produtos = response;
      },
      (error) => console.log(error)
    );
  }

  public editProduct(produto: any): void {
    this.selectedProduct = produto;
  }

  public updateProduct(produto: any): void {
    this.http
      .put(`http://localhost:5196/api/Produtos/${produto.id}`, produto)
      .subscribe(
        (response) => {
          console.log('Produto atualizado com sucesso!', response);
          this.getProdutos();
          this.selectedProduct = null;
        },
        (error) => {
          console.error('Erro ao atualizar o produto:', error);
        }
      );
  }

  public deleteProduct(id: number): void {
    if (confirm('Tem certeza que deseja excluir este produto?')) {
      this.http.delete(`http://localhost:5196/api/Produtos/${id}`).subscribe(
        () => {
          console.log('Produto deletado com sucesso!');
          this.getProdutos();
        },
        (error) => console.error('Erro ao deletar o produto:', error)
      );
    }
  }

  public openCreateModal(): void {
    this.modalService.open('#createModal');
  }

  public createProduct(form: any): void {
    if (form.valid) {
      const novoProduto = {
        nome: form.value.nome,
        descricao: form.value.descricao,
        preco: form.value.preco,
        codcategoria: form.value.codcategoria,
        codfabricante: form.value.codfabricante,
        imagemURL: form.value.imagemURL,
      };

      this.http
        .post('http://localhost:5196/api/Produtos', novoProduto)
        .subscribe(
          (response) => {
            console.log('Produto criado com sucesso!', response);
            this.modalService.dismissAll();
            form.reset();
            this.getProdutos();
            this.formInvalido = false;
          },
          (error) => {
            console.error('Erro ao criar o produto:', error);
          }
        );
    } else {
      this.formInvalido = true;
    }
  }
}
