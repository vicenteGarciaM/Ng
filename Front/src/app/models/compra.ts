import { Cliente } from './cliente';
import { Articulo } from './articulo';

export interface Compra {
  idCompra: number;
  clientes: Cliente;
  articulos: Articulo;
  fecha: string;
  idCliente: number;
  idArticulo: number;
}