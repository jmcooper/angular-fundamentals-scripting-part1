import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart/cart.service';
import { IProduct } from '../catalog/product.model';

@Component({
  selector: 'bot-site-header',
  templateUrl: './site-header.component.html',
  styleUrls: ['./site-header.component.css'],
})
export class SiteHeaderComponent {
  cart: IProduct[] = [];
  showSignOutMenu: boolean = false;

  constructor(private cartService: CartService) {}

  ngOnInit() {
    this.cart = this.cartService.getCart();
  }

  toggleSignOutMenu() {
    this.showSignOutMenu = !this.showSignOutMenu;
  }

  signOut() {
    this.showSignOutMenu = false;
  }
}
