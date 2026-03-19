import { Component, computed, effect, input, output, signal } from '@angular/core';
import { DecimalPipe } from '@angular/common';
import { Product } from '../../models/product.model';

@Component({
  selector: 'app-product-item',
  imports: [DecimalPipe],
  templateUrl: './product-item.html',
  styleUrl: './product-item.css',
})
export class ProductItemComponent {
  readonly product = input.required<Product>();
  readonly deleted = output<number>();

  readonly likesCount = signal(0);
  readonly roundedRating = computed(() => Math.round(this.product().rating));

  readonly whatsappShareLink = computed(() => {
    const text = `${this.product().name} — ${this.product().link}`;
    return `https://wa.me/?text=${encodeURIComponent(text)}`;
  });

  readonly telegramShareLink = computed(() => {
    const url = encodeURIComponent(this.product().link);
    const text = encodeURIComponent(this.product().name);
    return `https://t.me/share/url?url=${url}&text=${text}`;
  });

  constructor() {
    effect(() => {
      this.likesCount.set(this.product().likes);
    });
  }

  onLike(): void {
    this.likesCount.update(n => n + 1);
  }

  onDelete(): void {
    this.deleted.emit(this.product().id);
  }
}
