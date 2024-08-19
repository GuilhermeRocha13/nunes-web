// src/app/produto.model.ts
export interface Produto {
    id?: number; // O campo id é opcional para novos produtos
    nome: string;
    codigo: string;
    descricao: string;
    preco: number;
  }
  