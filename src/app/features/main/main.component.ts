import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FilterComponent } from '../filter/filter.component';
import { ListComponent } from '../list/list.component';

import { ITEMS, Item } from '../../core/mocks/items.mock';
import { FilterState } from '../filter/filter.component';

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [CommonModule, FilterComponent, ListComponent],
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
})
export class MainComponent {
  items: Item[] = ITEMS;
  filteredItems: Item[] = ITEMS;

  onFilterChange(filter: FilterState) {
    this.filteredItems = this.items.filter((item) => {
      // 1) Tags
      const matchesTags =
        filter.tags.length === 0 ||
        filter.tags.some((tag) => item.tags.includes(tag));

      // 2) Precio mínimo
      const matchesMin =
        filter.minPrice === null || item.priceValue >= filter.minPrice;

      // 3) Precio máximo
      const matchesMax =
        filter.maxPrice === null || item.priceValue <= filter.maxPrice;

      return matchesTags && matchesMin && matchesMax;
    });
  }
}

