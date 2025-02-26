import { Component } from '@angular/core';
import { ListaComprasComponent } from '../compras/lista-compras/lista-compras.component';
@Component({
  selector: 'app-dashboard',
  imports: [ListaComprasComponent],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {

}
