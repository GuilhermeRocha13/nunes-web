import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ProdutosComponent } from "./produtos/produtos.component";
import { HttpClientModule } from '@angular/common/http';
import { NavComponent } from "./nav/nav.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ProdutosComponent, HttpClientModule, NavComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'NunesSport-App';
}
