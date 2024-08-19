import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms'; // Adicione o FormsModule aqui
import { HttpClientModule } from '@angular/common/http';
import { CadastrarComponent } from './cadastrar/cadastrar.component';
import { ListarComponent } from './listar/listar.component';
import { EditarComponent } from './editar/editar.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CadastrarComponent, ListarComponent, EditarComponent, HttpClientModule, FormsModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'] // Corrija o nome para 'styleUrls' se estiver errado
})
export class AppComponent {
  title = 'Nunes-Sport-App';
}
