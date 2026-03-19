import { CommonModule } from '@angular/common';
import { Component, computed, inject, input, output } from '@angular/core';
import { RouterLink } from '@angular/router';
import { toSignal } from '@angular/core/rxjs-interop';

import { EventItem } from '../../models/event.model';
import { FavoritesService } from '../../services/favorites.service';

@Component({
  selector: 'app-event-card',
  imports: [CommonModule, RouterLink],
  templateUrl: './event-card.component.html',
  styleUrl: './event-card.component.scss',
})
export class EventCardComponent {
  private favService = inject(FavoritesService);

  event = input.required<EventItem>();
  toggleFavorite = output<number>();

  private favIds = toSignal(this.favService.favoriteIds$, {
    initialValue: new Set<number>(),
  });

  isFavorite = computed(() => this.favIds().has(this.event().id));

  ratingStars = computed(() => {
    const filled = Math.round(this.event().rating);
    return Array.from({ length: 5 }, (_, i) => i < filled);
  });

  priceLabel = computed(() =>
    new Intl.NumberFormat('ru-RU').format(this.event().price) + ' ₸'
  );

  private shareText() {
    const e = this.event();
    return `${e.name} — ${e.link}`;
  }

  whatsappShareUrl() {
    return `https://wa.me/?text=${encodeURIComponent(this.shareText())}`;
  }

  telegramShareUrl() {
    const e = this.event();
    return `https://t.me/share/url?url=${encodeURIComponent(e.link)}&text=${encodeURIComponent(e.name)}`;
  }

  onToggleFavorite() {
    this.toggleFavorite.emit(this.event().id);
  }
}
