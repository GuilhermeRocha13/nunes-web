import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ProdutosComponent } from "./produtos/produtos.component";
import { HttpClient, HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ProdutosComponent, HttpClientModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'NunesSport-App';
}
