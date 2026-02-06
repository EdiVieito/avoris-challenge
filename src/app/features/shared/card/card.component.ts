import { Component, EventEmitter, Input, Output } from '@angular/core';
import { BadgeComponent } from '../component/badge/badge.component';
import { CommonModule } from '@angular/common';
import { Item } from '../../../core/mocks/items.mock';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [CommonModule, BadgeComponent],
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent {
  @Input() item!: Item;
  @Output() showBreakdown = new EventEmitter<Item>();

  onBreakdownClick(e: Event) {
    e.preventDefault();
    this.showBreakdown.emit(this.item);
  }
}

