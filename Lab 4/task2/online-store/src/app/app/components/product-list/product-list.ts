import { Component } from '@angular/core';
import { ProductCard } from '../product-card/product-card';
import { Product } from '../../../models/product.model';
import { PRODUCTS } from '../../../data/products';

@Component({
  selector: 'app-product-list',
  imports: [ProductCard],
  templateUrl: './product-list.html',
  styleUrl: './product-list.css',
})
export class ProductList {
  readonly products: Product[] = PRODUCTS;
}
