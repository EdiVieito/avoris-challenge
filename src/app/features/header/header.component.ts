import { Component,HostListener,ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  isMenuOpen = false;
  @ViewChild('menuToggle', { read: ElementRef })
  menuToggle!: ElementRef<HTMLButtonElement>;

  @ViewChild('firstNavLink', { read: ElementRef })
  firstNavLink!: ElementRef<HTMLAnchorElement>;

  toggleMenu(): void {
    this.isMenuOpen = !this.isMenuOpen;

    queueMicrotask(() => {
      if (this.isMenuOpen) {
        this.firstNavLink?.nativeElement.focus();
      } else {
        this.menuToggle?.nativeElement.focus();
      }
    });
  }

  closeMenu(): void {
    this.isMenuOpen = false;
  }

  @HostListener('document:keydown', ['$event'])
  onKeydown(event: KeyboardEvent): void {
    if (event.key === 'Escape' && this.isMenuOpen) {
      this.closeMenu();
    }
  }

  onNavClick(event: Event): void {
    const target = event.target as HTMLElement | null;
    if (!target) return;

    if (target.closest('a')) {
      this.closeMenu();
    }
  }
}
