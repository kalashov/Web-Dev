import { CommonModule } from '@angular/common';
import { Component, computed, inject } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { toSignal } from '@angular/core/rxjs-interop';
import { map } from 'rxjs/operators';

import { EVENTS } from '../../data/events';
import { FavoritesService } from '../../services/favorites.service';

@Component({
  selector: 'app-event-detail',
  imports: [CommonModule, RouterLink],
  templateUrl: './event-detail.component.html',
  styleUrl: './event-detail.component.scss',
})
export class EventDetailComponent {
  private route = inject(ActivatedRoute);
  private favService = inject(FavoritesService);

  private eventId = toSignal(
    this.route.paramMap.pipe(map((p) => Number(p.get('id')))),
    { initialValue: 0 }
  );

  event = computed(() => EVENTS.find((e) => e.id === this.eventId()) ?? null);

  private favIds = toSignal(this.favService.favoriteIds$, {
    initialValue: new Set<number>(),
  });

  isFavorite = computed(() => this.favIds().has(this.eventId()));

  ratingStars = computed(() => {
    const ev = this.event();
    if (!ev) return [];
    const filled = Math.round(ev.rating);
    return Array.from({ length: 5 }, (_, i) => i < filled);
  });

  priceLabel = computed(() => {
    const ev = this.event();
    if (!ev) return '';
    return new Intl.NumberFormat('ru-RU').format(ev.price) + ' ₸';
  });

  toggleFavorite(): void {
    const id = this.eventId();
    if (id) this.favService.toggle(id);
  }
}
