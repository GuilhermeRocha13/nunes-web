import { Component, OnInit} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';



@Component({
  selector: 'app-produtos',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './produtos.component.html',
  styleUrl: './produtos.component.scss'
})
export class ProdutosComponent implements OnInit {

  public produtos: any;

  constructor(private http: HttpClient) { }

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
  
}
