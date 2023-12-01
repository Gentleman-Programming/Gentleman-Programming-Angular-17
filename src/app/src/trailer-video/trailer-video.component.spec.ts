import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrailerVideoComponent } from './trailer-video.component';

describe('TrailerVideoComponent', () => {
  let component: TrailerVideoComponent;
  let fixture: ComponentFixture<TrailerVideoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TrailerVideoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TrailerVideoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
