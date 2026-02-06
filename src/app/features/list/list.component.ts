import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from '../shared/card/card.component';
import { ModalComponent } from '../shared/component/modal/modal.component';
import { PriceBreakdownComponent } from '../shared/component/price-breakdown/price-breakdown.component';
import { ITEMS, Item } from '../../core/mocks/items.mock';

@Component({
  selector: 'app-list',
  standalone: true,
  imports: [CommonModule, CardComponent, ModalComponent, PriceBreakdownComponent],
  templateUrl: './list.component.html',
  styleUrl: './list.component.scss'
})
export class ListComponent {
  items: Item[] = ITEMS;

  isModalOpen = false;
  selectedItem: Item | null = null;

  openBreakdown(item: Item) {
    this.selectedItem = item;
    this.isModalOpen = true;
  }

  closeModal() {
    this.isModalOpen = false;
    this.selectedItem = null;
  }
}

