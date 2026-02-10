import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SLIDESHOWS, SlideshowCTA } from '../../core/mocks/slideshow.mock';

@Component({
  selector: 'app-slideshow',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './slideshow.component.html',
  styleUrls: ['./slideshow.component.scss'],
})
export class SlideshowComponent {
  slideshows: SlideshowCTA[] = SLIDESHOWS;
  activeIndex = 0;

  prev() {
    const n = this.slideshows.length;
    this.activeIndex = (this.activeIndex - 1 + n) % n;
  }

  next() {
    const n = this.slideshows.length;
    this.activeIndex = (this.activeIndex + 1) % n;
  }

  goTo(i: number) {
    this.activeIndex = i;
  }
}
