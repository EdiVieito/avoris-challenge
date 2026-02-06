import { Component } from '@angular/core';
import { FilterSectionComponent } from '../shared/component/filter-section/filter-section.component';
import { CheckboxComponent } from '../shared/component/checkbox/checkbox.component';
import { PriceInputComponent } from '../shared/component/price-input/price-input.component';

@Component({
  selector: 'app-filter',
  standalone: true,
  imports: [
    FilterSectionComponent,
    CheckboxComponent,
    PriceInputComponent
  ],
  templateUrl: './filter.component.html',
  styleUrl: './filter.component.scss'
})
export class FilterComponent {}
