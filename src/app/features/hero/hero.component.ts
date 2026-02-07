import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HEROS, HeroCTA } from '../../core/mocks/hero.mock';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.scss'],
})
export class HeroComponent {
  heros: HeroCTA[] = HEROS;
  activeIndex = 0;

  prev() {
    const n = this.heros.length;
    this.activeIndex = (this.activeIndex - 1 + n) % n;
  }

  next() {
    const n = this.heros.length;
    this.activeIndex = (this.activeIndex + 1) % n;
  }

  goTo(i: number) {
    this.activeIndex = i;
  }
}
