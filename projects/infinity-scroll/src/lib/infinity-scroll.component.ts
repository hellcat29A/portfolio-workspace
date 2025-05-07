import { NgFor } from '@angular/common';
import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'ngx-infinity-scroll',
  imports: [NgFor],
  templateUrl: './infinity-scroll.component.html',
  styleUrl: './infinity-scroll.component.css',
})
export class InfinityScrollComponent implements AfterViewInit {
  technologies = [
    {
      logo: 'images/angular-logo.svg',
      name: 'Alsico',
      websiteLink: 'https://www.alsico.com/eu-fr/',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam atque laborum iure commodi, veritatis vitae perspiciatis reprehenderit ea facilis qui temporibus, perferendis voluptatibus. Aliquam omnis minima temporibus veniam tempore saepe.',
    },
    {
      logo: 'images/nestjs-logo.svg',
      name: 'Granjard',
      websiteLink: 'https://granjard.fr/',

      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam atque laborum iure commodi, veritatis vitae perspiciatis reprehenderit ea facilis qui temporibus, perferendis voluptatibus. Aliquam omnis minima temporibus veniam tempore saepe.',
    },
    {
      logo: 'images/react-logo.svg',
      name: 'Aubade',
      websiteLink:
        'https://www.aubade.fr/?srsltid=AfmBOopPKNU0AAlQa5VLOp9bftL_Lq5S5DHK7TjAmFDhRVtrsV7-XwCd',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam atque laborum iure commodi, veritatis vitae perspiciatis reprehenderit ea facilis qui temporibus, perferendis voluptatibus. Aliquam omnis minima temporibus veniam tempore saepe.',
    },
    {
      logo: 'images/nextjs-logo.svg',
      name: 'Bleu Oceane',
      websiteLink: 'https://www.bleu-oceane.com/',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam atque laborum iure commodi, veritatis vitae perspiciatis reprehenderit ea facilis qui temporibus, perferendis voluptatibus. Aliquam omnis minima temporibus veniam tempore saepe.',
    },
    {
      logo: 'images/tailwind-logo.svg',
      name: 'NAFNAF',
      websiteLink: 'https://www.nafnaf.com/',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam atque laborum iure commodi, veritatis vitae perspiciatis reprehenderit ea facilis qui temporibus, perferendis voluptatibus. Aliquam omnis minima temporibus veniam tempore saepe.',
    },
    {
      logo: 'images/python-logo.svg',
      name: 'NAFNAF',
      websiteLink: 'https://www.nafnaf.com/',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam atque laborum iure commodi, veritatis vitae perspiciatis reprehenderit ea facilis qui temporibus, perferendis voluptatibus. Aliquam omnis minima temporibus veniam tempore saepe.',
    },
    {
      logo: 'images/docker-logo.svg',
      name: 'NAFNAF',
      websiteLink: 'https://www.nafnaf.com/',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam atque laborum iure commodi, veritatis vitae perspiciatis reprehenderit ea facilis qui temporibus, perferendis voluptatibus. Aliquam omnis minima temporibus veniam tempore saepe.',
    },
    {
      logo: 'images/mysql-logo.svg',
      name: 'NAFNAF',
      websiteLink: 'https://www.nafnaf.com/',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam atque laborum iure commodi, veritatis vitae perspiciatis reprehenderit ea facilis qui temporibus, perferendis voluptatibus. Aliquam omnis minima temporibus veniam tempore saepe.',
    },
    {
      logo: 'images/wordpress-logo.svg',
      name: 'NAFNAF',
      websiteLink: 'https://www.nafnaf.com/',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam atque laborum iure commodi, veritatis vitae perspiciatis reprehenderit ea facilis qui temporibus, perferendis voluptatibus. Aliquam omnis minima temporibus veniam tempore saepe.',
    },
  ];

  @ViewChild('carousel', { static: true })
  carouselRef!: ElementRef<HTMLDivElement>;
  @ViewChild('track', { static: true }) trackRef!: ElementRef<HTMLUListElement>;
  private startTime = Date.now();
  private readonly normalSpeed = 60; // pixels per second
  private readonly slowSpeed = 20;
  private currentSpeed = this.normalSpeed;
  private position = 0;
  private totalLoopWidth = 0;

  ngAfterViewInit(): void {
    this.measureTrackWidth();
    this.setupHoverEvents();
    this.animate();
  }

  private measureTrackWidth(): void {
    // Get half the width because track has 2x logos
    const track = this.trackRef.nativeElement;
    const half = track.scrollWidth / 2;
    this.totalLoopWidth = half;
  }

  private setupHoverEvents(): void {
    const carousel = this.carouselRef.nativeElement;
    carousel.addEventListener('mouseenter', () => {
      this.currentSpeed = this.slowSpeed;
    });
    carousel.addEventListener('mouseleave', () => {
      this.currentSpeed = this.normalSpeed;
    });
  }

  private readonly animate = () => {
    const now = Date.now();
    const elapsed = (now - this.startTime) / 1000;
    this.startTime = now;

    this.position += this.currentSpeed * elapsed;
    if (this.position >= this.totalLoopWidth) {
      this.position = 0;
    }

    this.trackRef.nativeElement.style.transform = `translateX(-${this.position}px)`;
    requestAnimationFrame(this.animate);
  };
}
