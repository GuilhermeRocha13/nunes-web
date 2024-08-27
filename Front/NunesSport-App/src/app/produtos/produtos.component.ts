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
  styleUrls: ['./produtos.component.scss']
})
export class ProdutosComponent implements OnInit {

  public produtos: any;
  public selectedFile: File | null = null;

  constructor(private http: HttpClient, private modalService: NgbModal) { }

  ngOnInit(): void {
    this.getProdutos();
  }

  public getProdutos(): void {
    this.http.get('http://localhost:5196/api/Produtos').subscribe(
      response => {
        console.log(response);
        this.produtos = response;
      },
      error => console.log(error)
    );
  }

  public editProduct(produto: any): void {
    // Lógica para editar o produto (pode abrir outro modal com os detalhes do produto)
  }

  public deleteProduct(id: number): void {
    if (confirm("Tem certeza que deseja excluir este produto?")) {
      this.http.delete(`http://localhost:5196/api/Produtos/${id}`).subscribe(
        () => {
          console.log('Produto deletado com sucesso!');
          this.getProdutos();
        },
        error => console.error('Erro ao deletar o produto:', error)
      );
    }
  }

  public openCreateModal(): void {
    this.modalService.open('#createModal');
  }

  public onFileChange(event: any): void {
    if (event.target.files && event.target.files.length > 0) {
      this.selectedFile = event.target.files[0];
    }
  }

  public createProduct(form: any): void {
    if (form.valid) {
      const formData = new FormData();
      formData.append('nome', form.value.nome);
      formData.append('descricao', form.value.descricao);
      formData.append('preco', form.value.preco);
      formData.append('codcategoria', form.value.codcategoria);
      formData.append('codfabricante', form.value.codfabricante);
  
      if (this.selectedFile) {
        formData.append('imagem', this.selectedFile, this.selectedFile.name);
      } else {
        console.error('Nenhum arquivo foi selecionado para o campo de imagem.');
      }
  
      this.http.post('http://localhost:5196/api/Produtos', formData)
        .subscribe(response => {
          console.log('Produto criado com sucesso!', response);
          this.modalService.dismissAll();
          form.reset();
          this.getProdutos();
        }, error => {
          console.error('Erro ao criar o produto:', error);
        });
    }
  }  
}
