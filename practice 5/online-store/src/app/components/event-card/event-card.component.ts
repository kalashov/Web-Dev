import { CommonModule } from '@angular/common';
import { Component, computed, input } from '@angular/core';

import { EventItem } from '../../models/event.model';

@Component({
  selector: 'app-event-card',
  imports: [CommonModule],
  templateUrl: './event-card.component.html',
  styleUrl: './event-card.component.scss'
})
export class EventCardComponent {
  event = input.required<EventItem>();

  ratingStars = computed(() => {
    const rating = this.event().rating;
    const filled = Math.round(rating);
    return Array.from({ length: 5 }, (_, i) => i < filled);
  });

  priceLabel = computed(() => {
    const value = this.event().price;
    return new Intl.NumberFormat('ru-RU').format(value) + ' ₸';
  });

  private shareText() {
    const e = this.event();
    return `${e.name} — ${e.link}`;
  }

  whatsappShareUrl() {
    return `https://wa.me/?text=${encodeURIComponent(this.shareText())}`;
  }

  telegramShareUrl() {
    const e = this.event();
    const url = encodeURIComponent(e.link);
    const text = encodeURIComponent(e.name);
    return `https://t.me/share/url?url=${url}&text=${text}`;
  }
}

