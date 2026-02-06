import { Component } from '@angular/core';
import { ListComponent } from './features/list/list.component';
import { FilterComponent } from './features/filter/filter.component';
import { HeaderComponent } from './features/header/header.component';
import { HeroComponent } from './features/hero/hero.component';
import { MainComponent } from './features/main/main.component';
import { FooterComponent } from './features/footer/footer.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [FilterComponent,ListComponent,HeaderComponent,HeroComponent,MainComponent,FooterComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'avoris-challenge';
}
