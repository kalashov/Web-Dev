import { Component, computed, signal } from '@angular/core';
import { ProductListComponent } from './components/product-list/product-list';
import { Category } from './models/category.model';
import { CATEGORIES, PRODUCTS } from './data/products';

@Component({
  selector: 'app-root',
  imports: [ProductListComponent],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  readonly categories: Category[] = CATEGORIES;
  readonly selectedCategoryId = signal<number | null>(null);

  readonly filteredProducts = computed(() => {
    const id = this.selectedCategoryId();
    if (id === null) return [];
    return PRODUCTS.filter(p => p.categoryId === id);
  });

  selectCategory(id: number): void {
    this.selectedCategoryId.set(id);
  }
}
