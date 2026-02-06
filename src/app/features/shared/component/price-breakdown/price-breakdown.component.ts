import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Item } from '../../../../core/mocks/items.mock';

@Component({
  selector: 'app-price-breakdown',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './price-breakdown.component.html',
  styleUrl: './price-breakdown.component.scss'
})
export class PriceBreakdownComponent {
  @Input() item!: Item;
}

