import { NgFor, NgIf, NgTemplateOutlet } from '@angular/common';
import {
  AfterViewInit,
  Component,
  ContentChild,
  ElementRef,
  Input,
  TemplateRef,
  ViewChild,
} from '@angular/core';
import { InfinityScrollConfig } from './infinity-scoll.model';

@Component({
  selector: 'ngx-infinity-scroll',
  standalone: true,
  imports: [NgFor, NgTemplateOutlet],
  templateUrl: './infinity-scroll.component.html',
  styleUrls: ['./infinity-scroll.component.css'],
  host: {
    class: 'w-full overflow-hidden',
  },
})
export class InfinityScrollComponent implements AfterViewInit {
  @Input() items: any[] = [];
  @Input() config: InfinityScrollConfig = {};

  @ContentChild(TemplateRef) cardTemplate!: TemplateRef<any>;
  @ViewChild('carousel', { static: true })
  carouselRef!: ElementRef<HTMLDivElement>;
  @ViewChild('track', { static: true }) trackRef!: ElementRef<HTMLUListElement>;

  private startTime = Date.now();
  private currentSpeed = 0;
  private position = 0;
  private totalLoopWidth = 0;

  ngAfterViewInit(): void {
    this.currentSpeed = this.getSpeed();
    this.measureTrackWidth();
    if (this.config.pauseOnHover !== false) this.setupHoverEvents();
    this.animate();
  }

  private getSpeed(): number {
    return this.config.speed ?? 60;
  }

  private getHoverSpeed(): number {
    return this.config.hoverSpeed ?? 20;
  }

  private measureTrackWidth(): void {
    const track = this.trackRef.nativeElement;
    const half = track.scrollWidth / 2;
    this.totalLoopWidth = half;
  }

  private setupHoverEvents(): void {
    const carousel = this.carouselRef.nativeElement;
    carousel.addEventListener('mouseenter', () => {
      this.currentSpeed = this.getHoverSpeed();
    });
    carousel.addEventListener('mouseleave', () => {
      this.currentSpeed = this.getSpeed();
    });
  }

  private readonly animate = () => {
    const now = Date.now();
    const elapsed = (now - this.startTime) / 1000;
    this.startTime = now;

    const direction = this.config.rtl ? -1 : 1;
    this.position += direction * this.currentSpeed * elapsed;

    if (!this.config.rtl && this.position >= this.totalLoopWidth) {
      this.position = 0;
    }
    if (this.config.rtl && this.position <= 0) {
      this.position = this.totalLoopWidth;
    }

    this.trackRef.nativeElement.style.transform = `translateX(${
      this.config.rtl ? '' : '-'
    }${this.position}px)`;
    requestAnimationFrame(this.animate);
  };
}
