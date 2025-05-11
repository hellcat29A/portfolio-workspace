import { NgClass, NgFor, NgIf } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  HostListener,
  Input,
} from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'sofia-ui-flyout-navbar',
  imports: [NgIf, NgClass, RouterModule, NgFor],
  templateUrl: './flyout-navbar.component.html',
  styleUrl: './flyout-navbar.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FlyoutNavbarComponent {
  @Input() navbarItems: { name: string; path: string }[] = [];
  @Input() logoUrl: string = 'default-logo-path';
  @Input() stickyOffset = 50;

  isSticky = false;
  menuOpen = false;

  constructor() {}
  toggleMenu() {
    this.menuOpen = !this.menuOpen;
  }
  @HostListener('window:scroll', [])
  onWindowScroll() {
    this.isSticky = window.scrollY > this.stickyOffset;
  }
}
