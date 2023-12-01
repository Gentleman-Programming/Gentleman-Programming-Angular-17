import { Component } from '@angular/core';
import { IframeVideoComponent, MainContainerComponent } from '../components';

@Component({
  selector: 'app-trailer-video',
  standalone: true,
  imports: [MainContainerComponent, IframeVideoComponent],
  templateUrl: './trailer-video.component.html',
  styleUrl: './trailer-video.component.scss',
})
export class TrailerVideoComponent {
  videoSrc = 'https://www.youtube.com/embed/KZCA_BRAkSA?si=UBolXF4Zq8n3ulUxF';
}
