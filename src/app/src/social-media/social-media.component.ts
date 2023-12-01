import { Component } from '@angular/core';
import { SocialMediaElementComponent } from './social-media-element/social-media-element.component';
import { SocialMediaElement } from './models';
import { MainContainerComponent, WobbleDirective } from '../components';

@Component({
  selector: 'app-social-media',
  standalone: true,
  imports: [
    SocialMediaElementComponent,
    MainContainerComponent,
    WobbleDirective,
  ],
  templateUrl: './social-media.component.html',
  styleUrl: './social-media.component.scss',
})
export class SocialMediaComponent {
  socialMediaList: SocialMediaElement[] = [
    {
      name: 'Twitch',
      link: 'https://www.twitch.tv/gentleman_programming',
      imgPath: 'assets/images/social-media/gentleman-twitch.svg',
    },
    {
      name: 'Youtube',
      link: 'https://www.youtube.com/@GentlemanProgramming',
      imgPath: 'assets/images/social-media/gentleman-youtube.svg',
    },
    {
      name: 'Discord',
      link: 'https://discord.gg/KEavKkDc5Y',
      imgPath: 'assets/images/social-media/gentleman-discord.svg',
    },
    {
      name: 'X',
      link: 'https://twitter.com/G_Programming',
      imgPath: 'assets/images/social-media/gentleman-x.svg',
    },
    {
      name: 'Instagram',
      link: 'https://www.instagram.com/gentlemanprogramming/',
      imgPath: 'assets/images/social-media/gentleman-instagram.svg',
    },
    {
      name: 'Tiktok',
      link: 'https://www.tiktok.com/@gentlemanprogramming',
      imgPath: 'assets/images/social-media/gentleman-tiktok.svg',
    },
  ];
}
