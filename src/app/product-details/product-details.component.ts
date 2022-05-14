import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { IProduct } from '../catalog/product.model';

@Component({
  selector: 'bot-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css'],
})
export class ProductDetailsComponent implements OnInit {
  @Input() product!: IProduct;
  @Output() buyClicked = new EventEmitter<IProduct>();

  constructor() {}

  ngOnInit(): void {}

  getImageUrl(product: IProduct) {
    return '/assets/images/robot-parts/' + product.imageName;
  }
}
