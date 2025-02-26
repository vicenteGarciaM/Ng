import { Component, OnInit } from '@angular/core';
import { CompraService } from '../../services/compra.service';
import { Compra } from '../../models/compra';
import { CommonModule } from '@angular/common'; 


@Component({
  selector: 'app-lista-compras',
  imports: [CommonModule],
  templateUrl: './lista-compras.component.html',
  styleUrls: ['./lista-compras.component.css']
})
export class ListaComprasComponent implements OnInit {
  compras: Compra[] = [];

  constructor(private compraService: CompraService) { }

  ngOnInit(): void {
    this.cargarCompras();
  }

  cargarCompras(): void {
    this.compraService.getCompras().subscribe(compras => {
      this.compras = compras;
    });
  }

  eliminarCompra(id: number): void {
    this.compraService.deleteCompra(id).subscribe(() => {
      this.cargarCompras();
    });
  }
}