import { Injectable } from '@angular/core';
import { IProduct } from '../catalog/product.model';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  private cart: IProduct[] = [];

  constructor() {}

  getCart() {
    return this.cart;
  }

  addItem(product: IProduct) {
    this.cart.push(product);
  }
}
