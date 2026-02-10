import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-filter-section',
  standalone: true,
  templateUrl: './filter-section.component.html',
  styleUrl: './filter-section.component.scss'
})
export class FilterSectionComponent {
  @Input() title = '';
  @Input() icon = '';
  @Input() open = true;
}

