import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'event/:id',
    loadComponent: () =>
      import('./components/event-detail/event-detail.component').then(
        (m) => m.EventDetailComponent
      ),
  },
];
