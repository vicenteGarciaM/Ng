import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Compra } from '../models/compra';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CompraService {
 private http=inject(HttpClient);
  private URLbase=environment.apiURL+'/api/Tienda/Campras';


  constructor() { }

  getCompras(): Observable<Compra[]> {
    return this.http.get<Compra[]>(this.URLbase);
  }

  getCompra(id: number): Observable<Compra> {
    return this.http.get<Compra>(`${this.URLbase}/${id}`);
  }

  createCompra(compra: Compra): Observable<Compra> {
    return this.http.post<Compra>(this.URLbase, compra);
  }

  updateCompra(id: number, compra: Compra): Observable<Compra> {
    return this.http.put<Compra>(`${this.URLbase}/${id}`, compra);
  }

  deleteCompra(id: number): Observable<any> {
    return this.http.delete(`${this.URLbase}/${id}`);
  }
}