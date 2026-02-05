import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ListComponent } from './features/list/list.component';
import { HeaderComponent } from './features/header/header.component';
import { HeroComponent } from './features/hero/hero.component';
import { MainComponent } from './features/main/main.component';
import { FooterComponent } from './features/footer/footer.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterModule,ListComponent,HeaderComponent,HeroComponent,MainComponent,FooterComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'avoris-challenge';
}
