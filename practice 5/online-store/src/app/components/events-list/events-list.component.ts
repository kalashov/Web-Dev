import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

import { EVENTS } from '../../data/events';
import { EventCardComponent } from '../event-card/event-card.component';

@Component({
  selector: 'app-events-list',
  imports: [CommonModule, EventCardComponent],
  templateUrl: './events-list.component.html',
  styleUrl: './events-list.component.scss'
})
export class EventsListComponent {
  events = EVENTS;
}

