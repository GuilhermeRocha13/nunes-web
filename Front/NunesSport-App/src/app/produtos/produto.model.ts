export class Produto {
    id: number;
    nome: string;
    descricao: string;
    preco: number;
    codcategoria: string;
    codfabricante: string;
  
    constructor() {
      this.id = 0;
      this.nome = '';
      this.descricao = '';
      this.preco = 0;
      this.codcategoria = '';
      this.codfabricante = '';
    }
  }
  