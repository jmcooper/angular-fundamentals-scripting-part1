import { Component, OnInit } from '@angular/core';
import { IProduct } from '../catalog/product.model';

@Component({
  selector: 'bot-site-header',
  templateUrl: './site-header.component.html',
  styleUrls: ['./site-header.component.css'],
})
export class SiteHeaderComponent {
  cart: IProduct[] = [];
  showSignOutMenu: boolean = false;

  constructor() {}

  ngOnInit() {
    // this.cartService.getCart().subscribe({
    //   next: (newCart) => (this.cart = newCart),
    // });
  }

  toggleSignOutMenu() {
    this.showSignOutMenu = !this.showSignOutMenu;
  }

  signOut() {
    this.showSignOutMenu = false;
  }
}
