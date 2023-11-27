import { AnimationBuilder, animate, style } from '@angular/animations';
import { Directive, ElementRef, OnInit, inject } from '@angular/core';

@Directive({
  selector: '[fadeIn]',
  standalone: true,
})
export class FadeInDirective implements OnInit {
  elementRef: ElementRef = inject(ElementRef);
  builder: AnimationBuilder = inject(AnimationBuilder);

  private player = this.builder
    .build([
      style({ opacity: 0 }),
      animate('0.5s ease-in', style({ opacity: 1 })),
    ])
    .create(this.elementRef.nativeElement);

  ngOnInit() {
    this.player.play();
  }
}
