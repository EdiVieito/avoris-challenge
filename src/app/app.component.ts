import { Component } from '@angular/core';
import { HeaderComponent } from './features/header/header.component';
import { SlideshowComponent } from './features/slideshow/slideshow.component';
import { MainComponent } from './features/main/main.component';
import { FooterComponent } from './features/footer/footer.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HeaderComponent,SlideshowComponent,MainComponent,FooterComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'avoris-challenge';
}
