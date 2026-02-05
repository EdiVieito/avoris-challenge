import { Component } from '@angular/core';
import { ITEMS, Item } from '../../core/mocks/items.mock';
import { CardComponent } from '../../shared/components/card/card.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-list',
  standalone: true,
  imports: [CardComponent,CommonModule],
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
})

export class ListComponent {
  items: Item[] = ITEMS;
}
