import { Component } from '@angular/core';

import { EventsListComponent } from './components/events-list/events-list.component';

@Component({
  selector: 'app-root',
  imports: [EventsListComponent],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
}
