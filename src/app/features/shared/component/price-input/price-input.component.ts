import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-price-input',
  standalone: true,
  templateUrl: './price-input.component.html',
  styleUrl: './price-input.component.scss'
})
export class PriceInputComponent {
  @Output() minChange = new EventEmitter<number | null>();
  @Output() maxChange = new EventEmitter<number | null>();

  onMin(value: string) {
    this.minChange.emit(value ? Number(value) : null);
  }

  onMax(value: string) {
    this.maxChange.emit(value ? Number(value) : null);
  }
}

