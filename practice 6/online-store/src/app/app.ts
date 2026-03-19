import { CommonModule } from '@angular/common';
import { Component, computed, inject, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { toSignal } from '@angular/core/rxjs-interop';

import { EventsListComponent } from './components/events-list/events-list.component';
import { EVENTS } from './data/events';
import { EventItem } from './models/event.model';
import { FavoritesService } from './services/favorites.service';

@Component({
  selector: 'app-root',
  imports: [CommonModule, EventsListComponent, RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
  private favService = inject(FavoritesService);

  allEvents: EventItem[] = EVENTS;

  showOnlyFavorites = signal(false);

  private favIds = toSignal(this.favService.favoriteIds$, {
    initialValue: new Set<number>(),
  });

  favCount = computed(() => this.favIds().size);

  displayedEvents = computed(() => {
    const ids = this.favIds();
    if (this.showOnlyFavorites()) {
      return this.allEvents.filter((e) => ids.has(e.id));
    }
    return this.allEvents;
  });

  toggleShowFavorites(): void {
    this.showOnlyFavorites.update((v) => !v);
  }

  toggleFavorite(eventId: number): void {
    this.favService.toggle(eventId);
  }

  isFavorite(id: number): boolean {
    return this.favIds().has(id);
  }
}
