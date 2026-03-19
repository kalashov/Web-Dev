import { Routes } from '@angular/router';
import { ProductList } from './app/components/product-list/product-list';

export const routes: Routes = [
  { path: '', component: ProductList },
  { path: '**', redirectTo: '' }
];
