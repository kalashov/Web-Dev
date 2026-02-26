import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

import { EventsListComponent } from './components/events-list/events-list.component';
import { EVENTS } from './data/events';
import { EventItem } from './models/event.model';

@Component({
  selector: 'app-root',
  imports: [CommonModule, EventsListComponent],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  events: EventItem[] = EVENTS;
  favorites: EventItem[] = [];

  toggleFavorite(eventId: number): void {
    const event = this.events.find((e) => e.id === eventId);
    if (!event) return;

    event.isFavorite = !event.isFavorite;
    this.favorites = this.events.filter((e) => e.isFavorite);
  }
}
