import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FILTER_SECTIONS, FilterSection } from '../../core/mocks/filters.mock';
import { FilterSectionComponent } from '../shared/component/filter-section/filter-section.component';
import { CheckboxComponent } from '../shared/component/checkbox/checkbox.component';
import { PriceInputComponent } from '../shared/component/price-input/price-input.component';

export interface FilterState {
  tags: string[];
  minPrice: number | null;
  maxPrice: number | null;
}

@Component({
  selector: 'app-filter',
  standalone: true,
  imports: [CommonModule, FilterSectionComponent, CheckboxComponent, PriceInputComponent],
  templateUrl: './filter.component.html',
  styleUrl: './filter.component.scss'
})
export class FilterComponent {
  @Output() filterChange = new EventEmitter<FilterState>();

  sections: FilterSection[] = FILTER_SECTIONS;

  private selectedTags = new Set<string>();
  minPrice: number | null = null;
  maxPrice: number | null = null;

  onTagChange(tagId: string, checked: boolean) {
    if (checked) this.selectedTags.add(tagId);
    else this.selectedTags.delete(tagId);

    this.emit();
  }

  onMinPriceChange(value: number | null) {
    this.minPrice = value;
    this.emit();
  }

  onMaxPriceChange(value: number | null) {
    this.maxPrice = value;
    this.emit();
  }

  private emit() {
    this.filterChange.emit({
      tags: Array.from(this.selectedTags),
      minPrice: this.minPrice,
      maxPrice: this.maxPrice
    });
  }
}
