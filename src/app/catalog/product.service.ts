import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable, tap } from 'rxjs';
import { IProduct } from './product.model';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  constructor(private http: HttpClient) {}

  getProducts(): Observable<IProduct[]> {
    return this.http.get<IProduct[]>('/api/products').pipe(
      map((c) => {
        return c.sort((a, b) => {
          if (a.name < b.name) return -1;
          if (a.name === b.name) return 0;
          return 1;
        });
      })
    );
  }
}
