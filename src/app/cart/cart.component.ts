import { Component, OnInit } from '@angular/core';
import { IProduct } from '../catalog/product.model';
import { CartService } from './cart.service';

@Component({
  selector: 'bot-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent {
  private cart: IProduct[] = [];
  constructor(public cartService: CartService) {}

  ngOnInit() {
    this.cart = this.cartService.getCart();
  }

  get cartItems() {
    return this.cart;
  }

  onRemoveClick(product: IProduct) {
    this.cartService.removeItem(product);
    this.cart = this.cartService.getCart();
  }

  get cartTotal() {
    return this.cart.reduce((prev, next) => {
      let discount = next.discount && next.discount > 0 ? 1 - next.discount : 1;
      return prev + next.price * discount;
    }, 0);
  }
}
