import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { map } from 'rxjs/operators';

const STORAGE_KEY = 'favorite_event_ids';

@Injectable({ providedIn: 'root' })
export class FavoritesService {
  private ids$ = new BehaviorSubject<Set<number>>(this.load());

  get favoriteIds$() {
    return this.ids$.asObservable();
  }

  get count$() {
    return this.ids$.pipe(map((s) => s.size));
  }

  toggle(id: number): void {
    const next = new Set(this.ids$.value);
    if (next.has(id)) {
      next.delete(id);
    } else {
      next.add(id);
    }
    this.ids$.next(next);
    this.save(next);
  }

  isFavorite(id: number): boolean {
    return this.ids$.value.has(id);
  }

  isFavorite$(id: number) {
    return this.ids$.pipe(map((s) => s.has(id)));
  }

  private load(): Set<number> {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (raw) return new Set(JSON.parse(raw));
    } catch {}
    return new Set();
  }

  private save(ids: Set<number>): void {
    localStorage.setItem(STORAGE_KEY, JSON.stringify([...ids]));
  }
}
