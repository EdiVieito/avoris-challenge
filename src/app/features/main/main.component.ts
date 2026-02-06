import { Component } from '@angular/core';
import { FilterComponent } from '../filter/filter.component';
import { ListComponent } from '../list/list.component';


@Component({
  selector: 'app-main',
  standalone: true,
  imports: [FilterComponent,ListComponent],
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
})
export class MainComponent {

}
