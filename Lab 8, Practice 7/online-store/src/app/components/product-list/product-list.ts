import { Component, effect, input, signal } from '@angular/core';
import { ProductItemComponent } from '../product-item/product-item';
import { Product } from '../../models/product.model';

@Component({
  selector: 'app-product-list',
  imports: [ProductItemComponent],
  templateUrl: './product-list.html',
  styleUrl: './product-list.css',
})
export class ProductListComponent {
  readonly products = input.required<Product[]>();
  readonly displayedProducts = signal<Product[]>([]);

  constructor() {
    effect(() => {
      this.displayedProducts.set([...this.products()]);
    });
  }

  onDelete(productId: number): void {
    this.displayedProducts.update(items =>
      items.filter(p => p.id !== productId)
    );
  }
}
