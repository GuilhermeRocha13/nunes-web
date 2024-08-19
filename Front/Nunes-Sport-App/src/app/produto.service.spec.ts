import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Produto } from './produto.model';

@Injectable({
  providedIn: 'root'
})
export class ProdutoService {
  private apiUrl = 'http://localhost:5000/api/produtos'; // Ajuste conforme necessário

  constructor(private http: HttpClient) { }

  // Método para atualizar um produto
  updateProduto(id: number, produto: Produto): Observable<void> {
    return this.http.put<void>(`${this.apiUrl}/${id}`, produto);
  }

  // Outros métodos...
}
