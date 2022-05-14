import { Component, OnInit } from '@angular/core';
import { of } from 'rxjs';
import { CartService } from '../cart/cart.service';
import { IProduct } from './product.model';
import { ProductService } from './product.service';

@Component({
  selector: 'bot-catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.css'],
})
export class CatalogComponent implements OnInit {
  products: IProduct[] = [];
  filter: string = '';

  constructor(
    private cartService: CartService,
    private productService: ProductService
  ) {}

  ngOnInit(): void {
    this.productService.getProducts().subscribe((p) => {
      this.products = p;
    });
  }

  addToCart(product: IProduct) {
    this.cartService.addItem(product);
  }

  getFilteredProducts() {
    return this.filter === ''
      ? this.products
      : this.products.filter((product) => product.category === this.filter);
  }
}
