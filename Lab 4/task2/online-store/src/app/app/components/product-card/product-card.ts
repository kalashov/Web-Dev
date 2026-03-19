import { Component, computed, input, signal } from '@angular/core';
import { DecimalPipe } from '@angular/common';
import { Product } from '../../../models/product.model';

@Component({
  selector: 'app-product-card',
  imports: [DecimalPipe],
  templateUrl: './product-card.html',
  styleUrl: './product-card.css',
})
export class ProductCard {
  readonly product = input.required<Product>();
  readonly selectedImageIndex = signal(0);

  readonly roundedRating = computed(() => Math.round(this.product().rating));
  readonly currentImage = computed(
    () => this.product().images[this.selectedImageIndex()] ?? this.product().image
  );

  readonly whatsappShareLink = computed(() => {
    const text = `Check out this product: ${this.product().link}`;
    return `https://wa.me/?text=${encodeURIComponent(text)}`;
  });

  readonly telegramShareLink = computed(() => {
    const encodedLink = encodeURIComponent(this.product().link);
    const encodedName = encodeURIComponent(this.product().name);
    return `https://t.me/share/url?url=${encodedLink}&text=${encodedName}`;
  });

  selectImage(index: number): void {
    this.selectedImageIndex.set(index);
  }
}
