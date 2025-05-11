import { NgFor, NgTemplateOutlet } from '@angular/common';
import {
  ChangeDetectorRef,
  Component,
  ContentChild,
  ElementRef,
  HostListener,
  Input,
  NgZone,
  QueryList,
  TemplateRef,
  ViewChild,
  ViewChildren,
} from '@angular/core';

@Component({
  selector: 'sofia-ui-scrollama-cards',
  templateUrl: './scrollama-cards.component.html',
  styleUrl: './scrollama-cards.component.css',
  imports: [NgFor, NgTemplateOutlet],
})
export class ScrollamaCardsComponent {
  @Input() items: any[] = [];
  // @Input() baseTop = 215;
  @Input() baseTop: { phone: number; tablet: number; desktop: number } = {
    phone: 120,
    tablet: 180,
    desktop: 215,
  };

  @Input() topStep = 30;
  @Input() topOffset = 10;

  @ContentChild(TemplateRef) cardTemplate!: TemplateRef<any>;
  @ViewChildren('cardElems') cardElems!: QueryList<ElementRef>;
  @ViewChild('containerRef') containerRef!: ElementRef;

  cardTransforms: string[] = [];

  constructor(
    private readonly cdr: ChangeDetectorRef,
    private readonly ngZone: NgZone
  ) {}

  ngAfterViewInit() {
    this.ngZone.runOutsideAngular(() => {
      requestAnimationFrame(() => {
        this.ngZone.run(() => {
          this.cardTransforms = this.items.map(
            () => 'perspective(1200px) scale(1)'
          );
          this.onScroll();
          this.cdr.detectChanges();
        });
      });
    });
  }

  getTopPosition(i: number): number {
    const responsiveBaseTop = this.getResponsiveBaseTop();
    return (
      responsiveBaseTop + i * this.topStep + Math.max(0, i - 1) * this.topOffset
    );
  }

  private getResponsiveBaseTop(): number {
    const width = window.innerWidth;
    if (width < 640) return this.baseTop.phone; // Tailwind: < sm
    if (width < 1024) return this.baseTop.tablet; // Tailwind: < lg
    return this.baseTop.desktop; // >= lg
  }

  @HostListener('window:scroll', [])
  onScroll() {
    const cards = this.cardElems.toArray();
    if (cards.length < 2) return;

    const scrollY = window.scrollY;
    const lastCard = cards[cards.length - 1].nativeElement;
    const lastCardTop = lastCard.getBoundingClientRect().top + scrollY;
    const lastCardCenter = lastCardTop + lastCard.offsetHeight / 2 + 100;

    this.cardTransforms = cards.map((_, i) => {
      if (i === cards.length - 1) return '';

      const current = cards[i].nativeElement;
      const next = cards[i + 1].nativeElement;

      const currentTop = current.getBoundingClientRect().top + scrollY;
      const currentHeight = current.offsetHeight;
      const startTrigger = currentTop + currentHeight / 2;
      const nextTop = next.getBoundingClientRect().top + scrollY;

      const distance = lastCardCenter - startTrigger;
      const totalScalable = cards.length - 1;
      const step = 0.05;
      const minScale = 1 - (totalScalable - i) * step;

      if (startTrigger >= lastCardCenter)
        return `perspective(1200px) scale(${minScale})`;

      if (nextTop <= startTrigger && distance > 0) {
        const progress = Math.min(
          Math.max((startTrigger - nextTop) / distance, 0),
          1
        );
        const scale = 1 - progress * (1 - minScale);
        return `perspective(1200px) scale(${scale.toFixed(4)})`;
      }

      return 'perspective(1200px) scale(1)';
    });
  }
}
