import { Component, Input } from '@angular/core';
import { SocialMediaElement } from '../models';
import { MatTooltipModule } from '@angular/material/tooltip';
import { NgOptimizedImage } from '@angular/common';

@Component({
  selector: 'app-social-media-element',
  standalone: true,
  imports: [MatTooltipModule, NgOptimizedImage],
  templateUrl: './social-media-element.component.html',
  styleUrl: './social-media-element.component.scss',
})
export class SocialMediaElementComponent {
  @Input() socialMediaElement: SocialMediaElement = {
    name: '',
    link: '',
    imgPath: '',
  };
}
