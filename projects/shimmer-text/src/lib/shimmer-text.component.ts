import { NgStyle } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'sofia-ui-shimmer-text',
  imports: [NgStyle],
  templateUrl: './shimmer-text.component.html',
  styleUrl: './shimmer-text.component.css',
  styles: [
    `
      :host {
        display: inline-block;
        padding: 6px 18px; /* equivalent to py-1.5 px-[18px] */
        background-color: black;
        border-radius: 9999px;
        border: 1px solid #5a6165;
      }
    `,
  ],
})
export class ShimmerTextComponent {
  @Input() text = 'Shiny Text';
  @Input() shimmerColor = 'rgba(255, 255, 255, 0.5)';
  @Input() textColor = '#edeef0';
  @Input() duration = '5s';
}
