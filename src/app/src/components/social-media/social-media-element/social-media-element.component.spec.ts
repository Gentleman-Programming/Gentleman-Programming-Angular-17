import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SocialMediaElementComponent } from './social-media-element.component';

describe('SocialMediaElementComponent', () => {
  let component: SocialMediaElementComponent;
  let fixture: ComponentFixture<SocialMediaElementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SocialMediaElementComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SocialMediaElementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
