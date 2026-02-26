import { CommonModule } from '@angular/common';
import { Component, input, output } from '@angular/core';

import { EventItem } from '../../models/event.model';
import { EventCardComponent } from '../event-card/event-card.component';

@Component({
  selector: 'app-events-list',
  imports: [CommonModule, EventCardComponent],
  templateUrl: './events-list.component.html',
  styleUrl: './events-list.component.scss'
})
export class EventsListComponent {
  events = input.required<EventItem[]>();
  toggleFavorite = output<number>();
}

