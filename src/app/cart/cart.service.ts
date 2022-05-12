import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { IProduct } from '../catalog/product.model';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  private cart: IProduct[] = [];
  private oCart = new BehaviorSubject<IProduct[]>([]);

  constructor(private http: HttpClient) {
    this.http.get<IProduct[]>('/api/cart').subscribe((c) => {
      this.cart = c;
      this.oCart.next(c);
    });
  }

  getCart() {
    return this.oCart;
  }

  addItem(product: IProduct) {
    this.cart.push(product);
    this.http.post('/api/cart', this.cart).subscribe(() => {
      this.oCart.next(this.cart);
    });
  }

  removeItem(product: IProduct) {
    this.cart = this.cart.filter((i) => i.id !== product.id);
    this.http.post('/api/cart', this.cart).subscribe(() => {
      this.oCart.next(this.cart);
    });
  }
}
